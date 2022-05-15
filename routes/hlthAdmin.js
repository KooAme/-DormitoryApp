const express = require('express');
const { Op } = require('sequelize');
const HlthRequest = require('../models/hlth_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/hlth' = '/'

// 헬스 예약자 관리
//'http://localhost:3001/hlth'
router.post('/', async (req, res, next) => {
  try {
    let Id = req.body.std_id;
    let Name = req.body.std_name;
    let StartDate = req.body.start_date;
    let EndDate = req.body.end_date;
    let Time = req.body.time;
    Id = Id || { [Op.ne]: null };
    Name = Name || { [Op.ne]: null };
    StartDate = StartDate || { [Op.ne]: null };
    EndDate = EndDate || { [Op.ne]: null };
    Time = Time || { [Op.ne]: null };
    const data = await HlthRequest.findAll({
      include: [
        {
          model: StdInfo,
          where: {
            std_id: Id,
            std_name: Name,
          },
        },
      ],
      where: {
        req_date: {
          [Op.between]: [StartDate, EndDate],
        },
        req_time: Time,
      },
    });
    res.send('성공');
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
