const express = require('express');
const { Op } = require('sequelize');
const AsRequest = require('../models/as_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

// A/S 신청자 관리
//'http://localhost:3001/admin/as'
// 조회
router.post('/', async (req, res, next) => {
  try {
    let Id = req.body.std_id;
    let Name = req.body.std_name;
    let StartDate = req.body.start_date;
    let EndDate = req.body.end_date;
    Id = Id || { [Op.ne]: null };
    Name = Name || { [Op.ne]: null };
    StartDate = StartDate || { [Op.ne]: null };
    EndDate = EndDate || { [Op.ne]: null };
    const data = await AsRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        std_id: Id,
        std_name: Name,
        request_date: {
          [Op.between]: [{ StartDate }, { EndDate }],
        },
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
// 상태 처리
router.put('/', async (req, res, next) => {
  try {
    let Id = req.body.std_id;
    let Name = req.body.std_name;
    let StartDate = req.body.start_date;
    let EndDate = req.body.end_date;
    Id = Id || { [Op.ne]: null };
    Name = Name || { [Op.ne]: null };
    StartDate = StartDate || { [Op.ne]: null };
    EndDate = EndDate || { [Op.ne]: null };
    const data = await AsRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        std_id: Id,
        std_name: Name,
        request_date: {
          [Op.between]: [{ StartDate }, { EndDate }],
        },
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
