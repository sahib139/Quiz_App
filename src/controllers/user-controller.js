const {UserService}  = require("../services/index");

class UserController{

    constructor(){
        this.userService = new UserService();
    }


    async signIn(req,res){
        try {
            const response = await this.userService.signIn(req.body);
            return res.status(201).json({
                data:response,
                success:true,
                message:"successfully signIn",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(500).json({
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
            return res.status(201).json({
                data:response,
                success:true,
                message:"successfully created a user",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data:{},
                success:false,
                message:"Unable to SignUp",
                err:error,
            });
        }
    }

}

module.exports = UserController;