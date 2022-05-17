const express = require('express');
const { Op } = require('sequelize');
const HlthRequest = require('../models/hlth_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/admin/hlth' = '/'

// 헬스 예약자 조회
//'http://localhost:3001/admin/hlth'
router.post('/', async (req, res, next) => {
  try {
    let Id = req.body.std_id;
    let Name = req.body.std_name;
    let date = req.body.date;
    let StartTime = req.body.start_time;
    let EndTime = req.body.end_time;
    Id = Id || { [Op.ne]: null };
    Name = Name || { [Op.ne]: null };
    date = date || new Date();
    StartTime = StartTime || { [Op.ne]: null };
    EndTime = EndTime || { [Op.ne]: null };
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
        date: date,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
