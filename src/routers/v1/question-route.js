const express = require("express");
const router = express.Router();

const {QuestionController} = require("../../controllers/index");
const questionController = new QuestionController();

const QuestionMiddleware = require("../../middleware/question-middleware");

router.get("/get/:id",questionController.get.bind(questionController));
router.post("/create",QuestionMiddleware.createMiddleware,questionController.create.bind(questionController));
router.patch("/update/:id",questionController.update.bind(questionController));
router.delete("/delete/:id",questionController.delete.bind(questionController));
router.get("/get",QuestionMiddleware.getAllMiddleware,questionController.getAll.bind(questionController));

module.exports=router;  