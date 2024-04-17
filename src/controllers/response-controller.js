const {ResponseService}  = require("../services/index");

class ResponseController{

    constructor(){
        this.responseService = new ResponseService();
    }


    async get(req,res){
        try {
            const response = await this.responseService.get(req.params.id);
            return res.status(200).json({
                data:response,
                success:success,
                message:"successfully fetch the response",
                err:{},
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
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
            return res.status(201).json({
                data:response,
                success:true,
                message:"successfully created a response",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(500).json({
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
            return res.status(200).json({
                data:response,
                success:true,
                message:"successfully deleted a response",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(500).json({
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
            return res.status(200).json({
                data:response,
                success:true,
                message:"successfully updated a response",
                err:{},
            }); 
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data:{},
                success:false,
                message:"Unable to update a response",
                err:error,
            });
        }
    }
}

module.exports = ResponseController;