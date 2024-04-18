const {ResponseService}  = require("../services/index");
const {StatusCodes} = require("http-status-codes");

class ResponseController{

    constructor(){
        this.responseService = new ResponseService();
    }


    async get(req,res){
        try {
            const response = await this.responseService.get(req.params.id);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully fetch the response",
                err:{},
            });
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to fetch the response",
                err:error,
            });
        }
    }

    async create(req,res){
        try {
            const response = await this.responseService.create(req.body);
            return res.status(StatusCodes.CREATED).json({
                data:response,
                success:true,
                message:"successfully created a response",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to created a response",
                err:error,
            });
        }
    }

    async delete(req,res){
        try {
            const response = await this.responseService.delete(req.params.id);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully deleted a response",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to delete a response",
                err:error,
            });
        }
    }

    async update(req,res){
        try {
            const response = await this.responseService.update(req.params.id,req.body);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully updated a response",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to update a response",
                err:error,
            });
        }
    }

    async createBulk(req,res){
        try {
            const response = await this.responseService.createBulk(req.body.data);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully createBulk response",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to createBulk response",
                err:error,
            });
        }
    }

    async getScore(req,res){
        try {
            const response = await this.responseService.getScore(req.user);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully get the user score",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to get the user score",
                err:error,
            });
        }
    }

    async quizFeedback(req,res){
        try {
            const response = await this.responseService.quizFeedback(req.user);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully get the user quizFeedback",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to get the user quizFeedback",
                err:error,
            });
        }
    }
}

module.exports = ResponseController;