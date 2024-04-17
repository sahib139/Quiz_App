const {UserRepository} = require("../repository/index");
const bcrypt = require("bcrypt");

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

    async signIn(data){
        try {
            const user = await this.userRepository.getUserByEmail(data.email);
            if(!user){
                throw "No user with such email exists";
            }
            if(!bcrypt.compareSync(data.password,user.password)){
                throw "Incorrect password";
            }
            return true;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
}

module.exports = UserService;