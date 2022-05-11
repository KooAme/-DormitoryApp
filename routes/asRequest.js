const express = require('express');
const Sequelize = require('sequelize');
const { Bulletin } = require('../models');
const AsRequest = require('../models/as_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/as/request' == '/request'

router.post('/request', async (req, res, next) => {
  try {
    AsRequest.create({
      title: req.body.title,
      content: req.body.content,
      confirm: false,
      request_date: Date.now(),
      vst_date: req.body.allow,
    });
    res.send('성공');
  } catch (err) {
    console.error(err);
    next(err);
  }
})

module.exports = router;