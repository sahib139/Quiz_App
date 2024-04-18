const getAllMiddleware = async (req,res,next)=>{
    try {
        req.body.filter = {
            limit:(!req.query.limit)?10:parseInt(req.query.limit),
            offset:(!req.query.offset)?0:parseInt(req.query.offset),
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data:{},
            success:false,
            message:"Bad Request!",
            err:error
        });
    }
};

const createMiddleware = async (req,res,next)=>{
    try {
        if(!Array.isArray(req.body.options)){
            throw "options are given in bad format!"
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({
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