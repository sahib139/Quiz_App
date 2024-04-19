const jwt = require("jsonwebtoken");
const {Secrete_Key} = require("../config/server-config");
const {StatusCodes} = require("http-status-codes");

const Authenticate = (req,res,next)=>{
    try {
        // const token = req.body.token; // request from postMan 
        const token = req.cookies.token;// request from browser
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