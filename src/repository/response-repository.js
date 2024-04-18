const {Response} = require("../models/index");
const CrudRepository = require("./crud-repository");

class ResponseRepository extends CrudRepository{

    constructor(){
        super(Response);
    }

    async findAllResponseOfUser(id){
        try {
            const responses = await Response.findAll({
                where:{user_id:id},
            });
            return responses;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async createBulk(data){
        try {
            const response = await Response.bulkCreate(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ResponseRepository;