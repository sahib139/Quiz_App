const express = require("express");
const router = express.Router();

const {QuestionController} = require("../../controllers/index");
const questionController = new QuestionController();

router.get("/get/:id",questionController.get);
router.post("/create",questionController.create);
router.patch("/update/:id",questionController.update);
router.delete("/delete/:id",questionController.delete);

module.exports=router;