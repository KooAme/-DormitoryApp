const express = require('express');
const BusRequest = require('../models/bus_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/bus/request' == '/'

// 버스 신청 조회
//'http://localhost:3001/bus/request/ride'
router.post('/request/ride', async (req, res, next) => {
  const Date = req.body.date;
  const Way = req.body.way;
  try {
    BusRequest.findAll({
      attributes: ['time'],
      where: {
        bus_date: Date,
        bus_way: Way,
      },
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 버스 신청
//'http://localhost:3001/bus/request/time'
router.post('/request/time', async (req, res, next) => {
  const Date = req.body.date;
  const Way = req.body.way;
  const Time = req.body.time;
  const Ride = req.body.ride;
  try {
    BusRequest.create({
      bus_date: Date,
      bus_way: Way,
      bus_ride: Ride,
      bus_time: Time,
    });
    res.send('성공');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
