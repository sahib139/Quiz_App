const express = require("express");
const router = express.Router();

const {UserController} = require("../../controllers/index");
const userController = new UserController(); 

const userMiddleware = require("../../middleware/user-middleware");

router.post("/signIn",userMiddleware.checkSignIn,userController.signIn.bind(userController));
router.post("/signUp",userMiddleware.checkSignUp,userController.signUp.bind(userController));

module.exports=router;