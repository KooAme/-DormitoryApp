const express = require('express');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/signin' = /
router.post('/', async (req, res, next) => {
  try {
    StdInfo.create({
      std_id: req.body.std_id,
      std_name: req.body.std_name,
      password: req.body.password,
      ph_num: req.body.ph_num,
      room_num: req.body.room_num,
      e_mail: req.body.e_mail,
    });
    console.log(req.body);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
