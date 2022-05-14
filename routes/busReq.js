const express = require('express');
const { Sequelize } = require('../models');
const BusRequest = require('../models/bus_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/bus/request' == '/'

router.post('/request/ride', async (req, res, next) => {
  const Date = req.body.date;
  const Way = req.body.way;
  try {
    BusRequest.findAll({
      attributes:['time'],
      where: {
        bus_date:Date,
        bus_way:Way,
      }
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
})

router.post('/request/time', async (req, res, next) => {
    const Date = req.body.date;
    const Way = req.body.way;
    const Time = req.body.time;
    const Ride = req.body.ride;
  try {
    BusRequest.create({
      bus_date: req.body.bus_date,
      bus_way: req.body.bus_way,
      bus_ride: req.body.bus_ride,
      bus_time:req.body.bus_time,
    });
    res.send('성공');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;