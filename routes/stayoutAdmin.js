const express = require('express');
const { Op } = require('sequelize');
const StayoutRequest = require('../models/stayout_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

// 외박 관리
//'http://localhost:3001/admin/stayout'
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
    const data = await StayoutRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        std_id: Id,
        std_name: Name,
        start_date: { [Op.gte]: StartDate },
        end_date: { [Op.lte]: EndDate },
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
