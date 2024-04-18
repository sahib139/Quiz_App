const express = require("express");
const router = express.Router();

const {QuestionController} = require("../../controllers/index");
const questionController = new QuestionController();

const QuestionMiddleware = require("../../middleware/question-middleware");

router.get("/questions/:id",questionController.get.bind(questionController));
router.get("/questions",QuestionMiddleware.getAllMiddleware,questionController.getAll.bind(questionController));
router.post("/questions",QuestionMiddleware.createMiddleware,questionController.create.bind(questionController));
router.patch("/questions/:id",questionController.update.bind(questionController));
router.delete("/questions/:id",questionController.delete.bind(questionController));

module.exports=router;  