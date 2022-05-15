const express = require('express');
const Bulletin = require('../models/bulletin');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/bulletin' == '/'

// 게시글 작성
//'http://localhost:3001/bulletin'
router.post('/', async (req, res, next) => {
  try {
    Bulletin.create({
      title: req.body.title,
      content: req.body.content,
      views: 0,
      hot: 0,
      create_date: Date.now(),
    });
    res.send('성공');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
