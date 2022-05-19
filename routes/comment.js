const express = require('express');
const { Op } = require('sequelize');
const Comment = require('../models/comment');
const router = express.Router();

// 'http://localhost:3001/comment' = '/'

// 댓글 입력
router.post('/create', async (req, res, next) => {
  try {
    const data = await Comment.create({
      content: req.body.content,
      create_date: Date.now(),
      bulletin_id: req.body.bulletin_id,
      std_id: req.body.std_id,
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 댓글 수정
router.patch('/update', async (req, res, next) => {
  try {
    const data = await Comment.update({
      content: req.body.content,
      where: {
        bulletin_id: req.body.bulletin_id,
        std_id: req.body.std_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 댓글 삭제
router.delete('/delete', async (req, res, next) => {
  try {
    const data = await AsRequest.destroy({
      where: {
        comment_id: req.body.comment_id,
        std_id: req.body.comment_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;