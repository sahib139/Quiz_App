const {User} = require("../models/index");
const CrudRepository = require("./crud-repository");

const {AppError,ValidationError} = require("../utils/errorHandling/index");
const {StatusCodes} = require("http-status-codes");

class UserRepository extends CrudRepository{

    constructor(){
        super(User);
    }

    async getUserByEmail(email){
        try {
            const user = await User.findOne({
                where:{
                    email,
                }
            });
            return user;
        } catch (error) {
            if(error.name="SequelizeValidationError"){
                throw new ValidationError(error);
            }
            throw new AppError(
                "RepositoryError",
                "Cannot fetch",
                "There was some issue in fetching user, please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

}

module.exports = UserRepository;