const express = require('express');
const { Op } = require('sequelize');
const StayoutRequest = require('../models/stayout_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

// 외박 관리
//'http://localhost:3001/stayout'
router.post('/', async (req, res, next) => {
  try {
    let s_Id = req.body.std_id;
    let s_Name = req.body.std_name;
    let s_StartDate = req.body.start_date;
    let s_EndDate = req.body.end_date;
    s_Id = s_Id ? s_Id : { [Op.ne]: null };
    s_Name = s_Name ? s_Name : { [Op.ne]: null };
    s_StartDate = s_StartDate
      ? s_StartDate
      : { [Op.ne]: null };
    s_EndDate = s_EndDate ? s_EndDate : { [Op.ne]: null };
    const data = await StayoutRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        std_id: s_Id,
        std_name: s_Name,
        //start_date >= s_StartDate,
        //end_date <= s_EndDate
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
