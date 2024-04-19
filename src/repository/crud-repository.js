const {AppError,ValidationError} = require("../utils/errorHandling/index");
const {StatusCodes} = require("http-status-codes");

class CrudRepository{

    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            if(error.name="SequelizeValidationError"){
                throw new ValidationError(error);
            }
            throw new AppError(
                "RepositoryError",
                "Cannot create",
                "There was some issue in creating, please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async delete(id){
        try {
            await this.model.destroy({
                where:{
                    id,
                },
            });
            return true;
        } catch (error) {
            if(error.name="SequelizeValidationError"){
                throw new ValidationError(error);
            }
            throw new AppError(
                "RepositoryError",
                "Cannot delete",
                "There was some issue in deleting, please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async get(id){
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            if(error.name="SequelizeValidationError"){
                throw new ValidationError(error);
            }
            throw new AppError(
                "RepositoryError",
                "Cannot fetch",
                "There was some issue in fetching, please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async update(id,data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id,
                }
            });
            return response;
        } catch (error) {
            if(error.name="SequelizeValidationError"){
                throw new ValidationError(error);
            }
            throw new AppError(
                "RepositoryError",
                "Cannot update",
                "There was some issue updating, please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = CrudRepository;