const {StatusCodes} = require("http-status-codes");

const createMiddleware = async (req,res,next)=>{
    try {
        if(req.body.question_id === undefined){
            throw "question_id missing!";
        }
        if(req.body.selected_answer === undefined){
            throw "selected_answer missing!";
        }
        req.body.question_id = parseInt(req.body.question_id);
        req.body.selected_answer = parseInt(req.body.selected_answer);
        req.body.user_id = req.user.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:"Bad Request!",
            err:error,
        });
    }
}

const createBulkMiddleware = async (req,res,next)=>{
    try {
        req.body = req.body.map((response)=>{
            if(response.question_id === undefined){
                throw "question_id missing!";
            }
            if(response.selected_answer === undefined){
                throw "selected_answer missing!";
            }
            response.question_id = parseInt(response.question_id);
            response.selected_answer = parseInt(response.selected_answer);
            response.user_id = req.user.id;
            return response;
        });
        next();
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:"Bad Request!",
            err:error,
        });
    }
}

module.exports={
    createMiddleware,
    createBulkMiddleware,
}