const express = require("express");
const router = express.Router();

const UserRoutes = require("./user-route");
const QuestionRoutes = require("./question-route");
const ResponseRoutes = require("./response-route");

router.use("/user",UserRoutes);
router.use("/question",QuestionRoutes);
router.use("/response",ResponseRoutes);


module.exports=router;