const jwt = require("jsonwebtoken");
const {Secrete_Key} = require("../config/server-config");
const {StatusCodes} = require("http-status-codes");

const Authenticate = (req,res,next)=>{
    try {
        const token = req.body.token; // for proper implementation we can fetch it from cookies
                                    // req.cookies.token
        const response = jwt.verify(token,Secrete_Key);  
        req.user = response;
        next();
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message:"Unable to authenticate",
            err:error,
        });
    }
}

module.exports = Authenticate;