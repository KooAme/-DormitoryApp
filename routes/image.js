const express = require('express');
const multer = require('multer');
const ImageArr = require('../models/image_arr');
const router = express.Router();
const Blob = require('blob');

// 'http://localhost:3001/image' = '/'

// 댓글 입력
router.post('/', async (req, res, next) => {
  try {
    const data = await ImageArr.create({
      path: req.body.imgBase64,
    })
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;