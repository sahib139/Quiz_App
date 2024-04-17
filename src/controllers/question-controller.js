const {QuestionService}  = require("../services/index");

class QuestionController{

    constructor(){
        this.questionService = new QuestionService();
    }


    async get(req,res){
        try {
            const response = await this.questionService.get(req.params.id);
            return res.status(200).json({
                data:response,
                success:success,
                message:"successfully fetch the question",
                err:{},
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data:{},
                success:false,
                message:"Unable to fetch the question",
                err:error,
            });
        }
    }

    async create(req,res){
        try {
            const response = await this.questionService.create(req.body);
            return res.status(201).json({
                data:response,
                success:true,
                message:"successfully created a question",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(500).json({
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
            return res.status(200).json({
                data:response,
                success:true,
                message:"successfully deleted a question",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(500).json({
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
            return res.status(200).json({
                data:response,
                success:true,
                message:"successfully updated a question",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data:{},
                success:false,
                message:"Unable to update a question",
                err:error,
            });
        }
    }
}

module.exports = QuestionController;