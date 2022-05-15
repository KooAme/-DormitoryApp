const express = require('express');
const Sequelize = require('sequelize');
const HlthRequest = require('../models/hlth_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/admin/hlth' == '/'

// 헬스장 신청
//'http://localhost:3001/admin/hlth/request'
router.post('/request', async (req, res, next) => {
  try {
    HlthRequest.create({
      req_date: req.body.date,
      req_time: req.body.time,
    });
    res.send('성공');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
