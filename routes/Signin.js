const express = require('express');
const StdInfo = require('../models/std_info');
const router = express.Router();
const StdWait = require('../models/std_wait');

//'http://localhost:3001/signin' = /
router.post('/', async (req, res, next) => {
  try {
    const data = StdWait.create({
      std_id: req.body.std_id,
      std_name: req.body.std_name,
      password: req.body.password,
      ph_num: req.body.ph_num,
      room_num: req.body.room_num,
      e_mail: req.body.e_mail,
      hash: req.body.hash,
    });
    console.log(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
