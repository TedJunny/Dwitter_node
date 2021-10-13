import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";

const router = express.Router();
const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("text should be at least 3 chracters"),
  validate,
];

router.get("", tweetController.getAll);
router.post("", validateTweet, tweetController.create);
router.get("/:id", tweetController.getById);
router.put("/:id", validateTweet, tweetController.update);
router.delete("/:id", tweetController.remove);

export default router;
