const {Question} = require("../models/index");
const CrudRepository = require("./crud-repository");

const {AppError,ValidationError} = require("../utils/errorHandling/index");
const {StatusCodes} = require("http-status-codes");

class QuestionRepository extends CrudRepository{

    constructor(){
        super(Question);
    }

    async get(id){
        try {
            const response = await this.model.findOne({
                attributes:['id','question','options','correct_answer'],
                where:{
                    id,
                }
            });
            return response;
        } catch (error) {
            if(error.name="SequelizeValidationError"){
                throw new ValidationError();
            }
            throw new AppError(
                "RepositoryError",
                "Cannot fetch",
                "There was some issue in fetching, please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async findAll(filter){
        try {
            const questions = await Question.findAll({
                attributes:['id','question','options'],
                offset:filter.offset,
                limit:filter.limit
            });
            return questions;
        } catch (error) {
            if(error.name="SequelizeValidationError"){
                throw new ValidationError();
            }
            throw new AppError(
                "RepositoryError",
                "Cannot fetch",
                "There was some issue in fetching questions, please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = QuestionRepository;