const {QuestionRepository} = require("../repository/index");

class QuestionService {

    constructor(){
        this.questionRepository = new QuestionRepository();
    }

    async create(data){
        try {
            const response = await this.questionRepository.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id){
        try {
            const response = await this.questionRepository.delete(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id){
        try {
            const response = await this.questionRepository.get(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.questionRepository.update(id,data);
            return true;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findAll(filter){
        try{
            const response = await this.questionRepository.findAll(filter);
            return response;
        } catch (error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = QuestionService;