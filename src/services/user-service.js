const {UserRepository} = require("../repository/index");

class UserService {

    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const response = await this.userRepository.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id){
        try {
            const response = await this.userRepository.delete(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id){
        try {
            const response = await this.userRepository.get(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.userRepository.update(id,data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserService;