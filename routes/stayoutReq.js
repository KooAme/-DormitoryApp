const express = require('express');
const StayoutRequest = require('../models/stayout_request');
const router = express.Router();

//'http://localhost:3001/stayout' == '/'

// 모바일 외박 신청
//'http://localhost:3001/stayout/request'
router.post('/request', async (req, res, next) => {
  try {
    StayoutRequest.create({
      start_date: req.body.sDate,
      end_date: req.body.eDate,
    });
    res.send('성공');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
