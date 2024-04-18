const express = require("express");
const router = express.Router();

const {ResponseController} = require("../../controllers/index");
const responseController = new ResponseController();

const ResponseMiddleware = require("../../middleware/response-middleware");

router.get("/responses/:id",responseController.get.bind(responseController));
router.post("/responses",ResponseMiddleware.createMiddleware ,responseController.create.bind(responseController));
router.post("/bulkResponses",ResponseMiddleware.createBulkMiddleware,responseController.createBulk.bind(responseController));
router.patch("/responses/:id",responseController.update.bind(responseController));
router.delete("/responses/:id",responseController.delete.bind(responseController));
router.get("/score",responseController.getScore.bind(responseController));
router.get("/quizFeedback",responseController.quizFeedback.bind(responseController));

module.exports=router;