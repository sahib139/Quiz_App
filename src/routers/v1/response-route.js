const express = require("express");
const router = express.Router();

const {ResponseController} = require("../../controllers/index");
const responseController = new ResponseController();

const ResponseMiddleware = require("../../middleware/response-middleware");

router.get("/get/:id",responseController.get.bind(responseController));
router.post("/create",ResponseMiddleware.createMiddleware ,responseController.create.bind(responseController));
router.post("/createBulk",ResponseMiddleware.createBulkMiddleware,responseController.createBulk.bind(responseController));
router.patch("/update/:id",responseController.update.bind(responseController));
router.delete("/delete/:id",responseController.delete.bind(responseController));
router.get("/score",responseController.getScore.bind(responseController));
router.get("/quizFeedback",responseController.quizFeedback.bind(responseController));

module.exports=router;