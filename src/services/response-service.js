const {ResponseRepository} = require("../repository/index");

class ResponseService {

    constructor(){
        this.responseRepository = new ResponseRepository();
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
}

module.exports = ResponseService;