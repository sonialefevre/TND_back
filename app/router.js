const express = require("express");
const router = express.Router();
const commentController = require("./controllers/comment");

router.get("/commentsbook", commentController.commentList);
router.post("/commentsbook", commentController.addComment);
//TO DO: Route to delete all comments
//TO DO: Route to delete one comment

module.exports = router;
