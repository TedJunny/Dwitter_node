import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();
const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("text should be at least 3 chracters"),
  validate,
];

router.get("", isAuth, tweetController.getAll);
router.post("", isAuth, validateTweet, tweetController.create);
router.get("/:id", isAuth, tweetController.getById);
router.put("/:id", isAuth, validateTweet, tweetController.update);
router.delete("/:id", isAuth, tweetController.remove);

export default router;
