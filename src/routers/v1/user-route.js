const express = require("express");
const router = express.Router();

const {UserController} = require("../../controllers/index");
const userController = new UserController();

router.post("/signIn",userController.signIn);
router.post("signUp",userController.signUp);

module.exports=router;