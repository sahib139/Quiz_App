const {QuestionRepository} = require("../repository/index");
const {ServiceError} = require("../utils/errorHandling/index");

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
            return new ServiceError();
        }
    }

    async delete(id){
        try {
            const response = await this.questionRepository.delete(id);
            return response;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }

    async get(id){
        try {
            const response = await this.questionRepository.get(id);
            return response;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }

    async update(id,data){
        try {
            const response = await this.questionRepository.update(id,data);
            return true;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }

    async findAll(filter){
        try{
            const response = await this.questionRepository.findAll(filter);
            return response;
        } catch (error){
            console.log(error);
            return new ServiceError();
        }
    }
}

module.exports = QuestionService;