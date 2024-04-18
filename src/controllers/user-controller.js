const {UserService}  = require("../services/index");
const {StatusCodes} = require("http-status-codes");

class UserController{

    constructor(){
        this.userService = new UserService();
    }


    async signIn(req,res){
        try {
            const response = await this.userService.signIn(req.body);
            return res.status(StatusCodes.ACCEPTED).json({
                data:response,
                success:true,
                message:"successfully signIn",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:{},
                success:false,
                message:"Unable to SignIn",
                err:error,
            });
        }
    }

    async signUp(req,res){
        try {
            const response = await this.userService.create(req.body);
            return res.status(StatusCodes.CREATED).json({
                data:response,
                success:true,
                message:"successfully created a user",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.BAD_REQUEST).json({
                data:{},
                success:false,
                message:"Unable to SignUp",
                err:error,
            });
        }
    }

}

module.exports = UserController;