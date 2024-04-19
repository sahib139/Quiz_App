const {QuestionService}  = require("../services/index");
const {StatusCodes} = require("http-status-codes");

class QuestionController{

    constructor(){
        this.questionService = new QuestionService();
    }


    async get(req,res){
        try {
            const response = await this.questionService.get(req.params.id);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully fetch the question",
                err:{},
            });
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to fetch the question",
                err:error,
            });
        }
    }

    async getAll(req,res){
        try {
            const response = await this.questionService.findAll(req.body.filter);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully fetch the questions",
                err:{},
            });
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to fetch the questions",
                err:error,
            });
        }
    }

    async create(req,res){
        try {
            const response = await this.questionService.create(req.body);
            return res.status(StatusCodes.CREATED).json({
                data:response,
                success:true,
                message:"successfully created a question",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to created a question",
                err:error,
            });
        }
    }

    async delete(req,res){
        try {
            const response = await this.questionService.delete(req.params.id);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully deleted a question",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to delete a question",
                err:error,
            });
        }
    }

    async update(req,res){
        try {
            const response = await this.questionService.update(req.params.id,req.body);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully updated a question",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to update a question",
                err:error,
            });
        }
    }
}

module.exports = QuestionController;