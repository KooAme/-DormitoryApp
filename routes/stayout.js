const express = require('express');
const Sequelize = require('sequelize');
const StayoutRequest = require('../models/stayout_request');
const router = express.Router();

//'http://localhost:3001/hlth/request' == '/request'

router.post('/request', async (req, res, next) => {
  try {
    StayoutRequest.create({
      start_date:req.body.sDate,
      end_date:req.body.eDate,
    });
    res.send('성공');
  } catch (err) {
    console.error(err);
    next(err);
  }
})

module.exports = router;