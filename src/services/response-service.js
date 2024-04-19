const {ResponseRepository, QuestionRepository} = require("../repository/index");
const {ServiceError} = require("../utils/errorHandling/index");

class ResponseService {

    constructor(){
        this.responseRepository = new ResponseRepository();
        this.questionRepository = new QuestionRepository();
    }

    async create(data){
        try {
            const question = await this.questionRepository.get(data.question_id);
            data.is_correct = false;
            if(question.correct_answer == data.selected_answer){
                data.is_correct = true;
            }
            const response = await this.responseRepository.create(data); 
            return response;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }

    async delete(id){
        try {
            const response = await this.responseRepository.delete(id);
            return response;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }

    async get(id){
        try {
            const response = await this.responseRepository.get(id);
            return response;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }

    async update(id,data){
        try {
            const existingResponse = await this.responseRepository.get(id); 
            const question = await this.questionRepository.get(existingResponse.question_id);
            if(question.correct_answer == data.selected_answer){
                data.is_correct = true;
            }
            const response = await this.responseRepository.update(id,data);
            return response;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }

    async createBulk(data){
        try {
            // data only has question_id and selected_answer(index of the option).
            // we have to add user_id , is_correct field in each response.
            data = await Promise.all(data.map(async (response)=>{
                const question = await  this.questionRepository.get(response.question_id);
                await this.ifResponseExistThenDelete(response);
                response.is_correct = false;
                if(question.correct_answer == response.selected_answer)
                    response.is_correct = true;
                return response;
            }));
            const response = await this.responseRepository.createBulk(data);
            return new ServiceError();

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getScore(userDetail){
        try {
            // in limit add max value --> assume 50
            const responses = await this.responseRepository.findAllResponseOfUser(userDetail.id);
            let score = 0;
            responses.map((response)=>{
                if(response.is_correct)score++;
            });
            return score;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }

    async quizFeedback(userDetail){
        try {
            let responses = await this.responseRepository.findAllResponseOfUser(userDetail.id);
            responses = await Promise.all(responses.map(async (response)=>{
                const Question = await this.questionRepository.get(response.question_id);
                return {
                    question : Question.question,
                    selected_answer : Question.options[response.selected_answer],
                    correct_answer : Question.options[Question.correct_answer],
                    is_correct : response.is_correct
                }
            }));
            return responses;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }

    async ifResponseExistThenDelete(response){
        try {
            await this.responseRepository.ifResponseExistThenDelete(response.user_id,response.question_id);
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }
}

module.exports = ResponseService;