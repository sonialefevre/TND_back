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
        clientname: req.body.clientname,
        clientcompany: req.body.clientcompany,
        comment: req.body.comment,
      });
      res.json(newCom);
    } catch (error) {
      console.error(error);
    }
  },

  //TODO: Method to delete one comment (patch?)
  //TODO: Method to delete all comments
};

module.exports = commentController;
