const express = require('express');
const HlthRequest = require('../models/hlth_request');
const router = express.Router();

//'http://localhost:3001/hlth/create'
router.post('/create', async (req, res, next) => {
  try {
    const data = await HlthRequest.create({
      date:req.body.date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      std_id: req.body.std_id,
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
})

// 'http://localhost:3001/hlth/search'
// 학번으로 날짜, 시작시간, 종료시간 조회 후 PK 순으로 정렬
router.post('/search', async (req, res, next) => {
  try {
    const data = await HlthRequest.findAll({
      where: { std_id: req.body.std_id },
      attributes: ['date', 'start_time', 'end_time'],
      order: [['hlth_id', 'DESC']],
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 'http://localhost:3001/hlth/update'
// PK, 학번으로 수정
router.post('/update', async (req, res, next) => {
  try {
    const data = await HlthRequest.update({
      date: req.body.date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      where: {
        std_id: req.body.std_id,
        hlth_id: req.body.hlth_id,
      }
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
})

// 'http://localhost:3001/hlth/delete'
// PK, 학번으로 삭제
router.post('/delete', async (req, res, next) => {
  try {
    const data = await HlthRequest.destroy({
      where: {
        std_id: req.body.std_id,
        hlth_id: req.body.hlth_id,
      }
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;