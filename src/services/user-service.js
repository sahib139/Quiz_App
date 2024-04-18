const jwt = require("jsonwebtoken");
const {UserRepository} = require("../repository/index");
const bcrypt = require("bcrypt");

const {ServiceError} = require("../utils/errorHandling/index");
const { Secrete_Key } = require("../config/server-config");

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
            return new ServiceError();
        }
    }

    async delete(id){
        try {
            const response = await this.userRepository.delete(id);
            return response;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }

    async get(id){
        try {
            const response = await this.userRepository.get(id);
            return response;
        } catch (error) {
            console.log(error);
            return new ServiceError();
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
            const token = jwt.sign({id:user.id,email:user.email},Secrete_Key,{expiresIn:'3d'});
            return token;
        } catch (error) {
            console.log(error);
            return new ServiceError();
        }
    }
    
}

module.exports = UserService;