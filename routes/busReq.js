const express = require('express');
const { Sequelize } = require('../models');
const BusRequest = require('../models/bus_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/bus/request' == '/'

router.post('/request', async (req, res, next) => {
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