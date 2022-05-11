const express = require('express');
const Sequelize = require('sequelize');
const AsRequest = require('../models/as_request');
const router = express.Router();

//'http://localhost:3001/as/update' == '/update'

router.post('/update', async (req, res, next) => {
  try {
    AsRequest.update({
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