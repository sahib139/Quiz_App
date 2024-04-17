const {ResponseRepository, QuestionRepository} = require("../repository/index");

class ResponseService {

    constructor(){
        this.responseRepository = new ResponseRepository();
        this.questionRepository = new QuestionRepository();
    }

    async create(data){
        try {
            const response = await this.responseRepository.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id){
        try {
            const response = await this.responseRepository.delete(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id){
        try {
            const response = await this.responseRepository.get(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.responseRepository.update(id,data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async createBulk(userDetail,data){
        try {
            // data only has question_id and selected_answer(index of the option).
            // we have to add user_id , is_correct field in each response.
            data = data.map(async (response)=>{
                const question = await  this.questionRepository.get(response.id);
                response.user_id = userDetail.id;
                response.is_correct = false;
                if(question.correct_answer == response.correct_answer)
                    response.is_correct = true;
                return response;
            });

            const response = await this.responseRepository.createBulk(data);
            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getScore(userDetail){
        try {
            const responses = await this.responseRepository.findAllResponseOfUser(userDetail.id);
            let score = 0;
            responses.map((response)=>{
                if(response.is_correct)score++;
            });
            return score;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async quizFeedback(userDetail){
        try {
            const responses = await this.responseRepository.findAllResponseOfUser(userDetail.id);
            responses = responses.map(async (responses)=>{
                const Question = await this.questionRepository.get(responses.question_id);
                Question.option = JSON.parse(Question.option)
                return {
                    question : Question.question,
                    selected_answer : Question.option[responses.selected_answer],
                    correct_answer : Question.option[correct_answer],
                    is_correct : responses.is_correct
                }
            });
            return responses;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ResponseService;