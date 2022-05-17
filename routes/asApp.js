const express = require('express');
const { Op } = require('sequelize');
const AsRequest = require('../models/as_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

// 모바일 a/s 신청
// 'http://localhost:3001/as/create'
router.post('/create', async (req, res, next) => {
  try {
    const data = await AsRequest.create({
      title: req.body.title,
      content: req.body.content,
      confirm: false,
      request_date: Date.now(),
      vst_date: req.body.allow,
      std_id: req.body.std_id,
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 모바일 a/s 조회
// 신청날짜, 제목 (추후에 수정 예정), 상태, 수리일자 조회
// 'http://localhost:3001/as/search'
router.post('/search', async (req, res, next) => {
  try {
    const data = await AsRequest.findAll({
      where: { std_id: req.body.std_id },
      attributes: [
        'request_date',
        'title',
        'confirm',
        'repair_date',
      ],
      order: [['confirm', 'DESC']],
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 모바일 a/s 수정
// PK, 학번으로 수정
// 'http://localhost:3001/as/update'
router.post('/update', async (req, res, next) => {
  try {
    const data = await AsRequest.update({
      title: req.body.title,
      content: req.body.content,
      request_date: Date.now(),
      where: {
        std_id: req.body.std_id,
        as_id: req.body.as_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 모바일 a/s 삭제
// PK, 학번으로 삭제
// 'http://localhost:3001/as/delete'
router.post('/delete', async (req, res, next) => {
  try {
    const data = await AsRequest.destroy({
      where: {
        std_id: req.body.std_id,
        as_id: req.body.as_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
