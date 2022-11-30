const { Comment } = require("../models");

const commentController = {
  commentList: async function (req, res) {
    try {
      const comments = await Comment.findAll();
      res.json(comments);
    } catch (error) {
      console.error(error);
    }
  },

  addComment: async (req, res) => {
    try {
      const newCom = await Comment.create({
        clientname: req.body.name,
        clientcompany: req.body.company,
        comment: req.body.comment,
      });
      res.json(newCom);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = commentController;
