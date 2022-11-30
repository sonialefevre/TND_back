const express = require("express");
const router = express.Router();
const commentController = require("./controllers/comment");

router.get("/commentsbook", commentController.commentList);
router.post("/commentsbook", commentController.addComment);

module.exports = router;
