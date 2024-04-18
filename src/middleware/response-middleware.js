const createMiddleware = async (req,res,next)=>{
    try {
        if(req.body.question_id === undefined){
            throw "question_id missing!";
        }
        if(req.body.selected_answer === undefined){
            throw "selected_answer missing!";
        }
        req.body.user_id = req.user.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data:{},
            success:false,
            message:"Bad Request!",
            err:error,
        });
    }
}

const createBulkMiddleware = async (req,res,next)=>{
    try {
        req.body.data = req.body.data.map((response)=>{
            if(response.question_id === undefined){
                throw "question_id missing!";
            }
            if(response.selected_answer === undefined){
                throw "selected_answer missing!";
            }
            response.user_id = req.user.id;
            return response;
        });
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({
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