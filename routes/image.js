const express = require('express');
const multer = require('multer');
const ImageArr = require('../models/image_arr');
const router = express.Router();
const Blob = require('blob');

// 'http://localhost:3001/image' = '/'

// 이미지 삽입
router.post('/', async (req, res, next) => {
  try {
    const data = await ImageArr.create({
      path: req.body.imgBase64,
      bulletin_id: req.body.bulletin_id,
    })
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 이미지 수정
// 'http://localhost:3001/image/update'
router.patch('/update', async (req, res, next) => {
  try {
    const data = await ImageArr.update({
      path: req.body.imgBase64,
      where: {
        bulletin_id: req.body.bulletin_id,
        path: req.body.imgBase64,
      }
    })
    return res.status(200).json(data);
  } catch (err) {

  }
})

router.patch('/delete', async (req, res, next) => {
  try {
    const data = await ImageArr.destroy({
      path: req.body.imgBase64,
      where: {
        bulletin_id: req.body.bulletin_id,
        path: req.body.imgBase64,
      }
    })
    return res.status(200).json(data);
  } catch (err) {

  }
})

module.exports = router;