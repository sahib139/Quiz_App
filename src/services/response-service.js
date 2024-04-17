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
}

module.exports = ResponseService;