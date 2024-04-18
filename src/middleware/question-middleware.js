const {StatusCodes} = require("http-status-codes");

const getAllMiddleware = async (req,res,next)=>{
    try {
        req.body.filter = {
            limit:(!req.query.limit)?10:parseInt(req.query.limit),
            offset:(!req.query.offset)?0:parseInt(req.query.offset),
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:"Bad Request!",
            err:error
        });
    }
};

const createMiddleware = async (req,res,next)=>{
    try {
        if(!req.body.question){
            throw "question must be provided";
        }
        if(!req.body.options && !Array.isArray(req.body.options) && req.body.options.length < 4){
            throw "four options must be given in array format";
        }
        if(!req.body.correct_answer){
            throw "index of correct_answer must be provided";
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:"Bad Request!",
            err:error
        });
    }
};

module.exports={
    getAllMiddleware,
    createMiddleware,
}