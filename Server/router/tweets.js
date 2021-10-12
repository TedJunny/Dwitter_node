import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";

const router = express.Router();

router.get("", tweetController.getAll);
router.post("", tweetController.create);
router.get("/:id", tweetController.getById);
router.put("/:id", tweetController.update);
router.delete("/:id", tweetController.remove);

export default router;
