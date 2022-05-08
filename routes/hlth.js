const express = require('express');
const { Op } = require('sequelize');
const HlthRequest = require('../models/hlth_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/hlth'
router.post('/', async (req, res, next) => {
  let s_Id = req.body.std_id;
  let s_Name = req.body.std_name;
  let s_StartDate = req.body.startDate;
  let s_EndDate = req.body.endDate;
  let s_Time = req.body.time;
  s_Id = s_Id ? s_Id : { ne: null };
  s_Name = s_Name ? s_Name : { ne: null };
  s_StartDate = s_StartDate ? s_StartDate : { ne: null };
  s_EndDate = s_EndDate ? s_EndDate : { ne: null };
  s_Time = s_Time ? s_Time : { ne: null };
  try {
    const data = await HlthRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        std_id: s_Id,
        std_name: std_name,
        s_StartDate: s_StartDate,
        s_EndDate: s_EndDate,
        s_Time: s_Time,
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
