const {Response} = require("../models/index");
const CrudRepository = require("./crud-repository");

class ResponseRepository extends CrudRepository{

    constructor(){
        super(Response);
    }

    async findAllResponseOfUser(id,filter){
        try {
            const responses = await Response.findAll({
                where:{id},
                limit:filter.limit,
                offset:filter.offset,
            });
            return responses;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async createBulk(data){
        try {
            const response = await Response.BulkCreate(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ResponseRepository;