const express = require("express");
const router = express.Router();

const {UserController} = require("../../controllers/index");
const userController = new UserController(); 

router.post("/signIn",userController.signIn.bind(userController));
router.post("/signUp",userController.signUp.bind(userController));

module.exports=router;