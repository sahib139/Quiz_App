const {Response} = require("../models/index");
const CrudRepository = require("./crud-repository");

const {AppError,ValidationError} = require("../utils/errorHandling/index");
const {StatusCodes} = require("http-status-codes");

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
            if(error.name="SequelizeValidationError"){
                throw new ValidationError();
            }
            throw new AppError(
                "RepositoryError",
                "Cannot fetch",
                "There was some issue in fetching responses, please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
    async createBulk(data){
        try {
            const response = await Response.bulkCreate(data);
            return response;
        } catch (error) {
            if(error.name="SequelizeValidationError"){
                throw new ValidationError();
            }
            throw new AppError(
                "RepositoryError",
                "Cannot create",
                "There was some issue in creating responses, please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = ResponseRepository;