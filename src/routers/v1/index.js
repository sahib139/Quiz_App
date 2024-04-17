const express = require("express");
const router = express.Router();

const UserRoutes = require("./user-route");
const QuestionRoutes = require("./question-route");
const ResponseRoutes = require("./response-route");

const Authenticate = require("../../middleware/Authenticate");

router.use("/user",UserRoutes);
router.use("/question",Authenticate,QuestionRoutes);
router.use("/response",Authenticate,ResponseRoutes);


module.exports=router;