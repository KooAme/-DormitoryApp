const express = require('express');
const { Op } = require('sequelize');
const Notice = require('../models/notice');
const router = express.Router();

// 'http://localhost:3001/notice' = '/'

// 공지사항 생성
// 'http://localhost:3001/notice/create'
router.post('/create', async (req, res, next) => {
  try {
    const data = await Notice.create({
      title: req.body.title,
      content: req.body.content,
      create_date: Date.now(),
      adm_id: req.body.adm_id,
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});


// 공지사항 수정
// 'http://localhost:3001/notice/update'
router.patch('/update', async (req, res, next) => {
  try {
    const data = await Notice.update({
      title: req.body.title,
      content: req.body.create_date,
      where: {
        notice_id: req.body.notice_id,
        adm_id: req.body.adm_id,
      }
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
})

// 공지사항 삭제
// 'http://localhost:3001/notice/delete'
router.delete('/delete', async (req, res, next) => {
  try {
    const data = await Notice.destroy({
      where: {
        notice_id: req.body.notice_id,
        adm_id: req.body.adm_id,
      }
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
})

module.exports = router;