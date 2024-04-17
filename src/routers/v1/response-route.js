const express = require("express");
const router = express.Router();

const {ResponseController} = require("../../controllers/index");
const responseController = new ResponseController();

router.get("/get/:id",responseController.get);
router.post("/create",responseController.create);
router.post("/createBulk",responseController.createBulk);
router.patch("/update/:id",responseController.update);
router.delete("/delete/:id",responseController.delete);
router.get("/score",responseController.getScore);
router.get("/quizFeedback",responseController.quizFeedback);

module.exports=router;