const express = require('express');
const { Op } = require('sequelize');
const AsRequest = require('../models/as_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

// 전체조회
//'http://localhost:3001/as/request' = /
router.post('/', async (req, res, next) => {
  try {
    let Id = req.body.std_id;
    let Name = req.body.std_name;
    let confirm = req.body.std;
    let StartDate = req.body.start_date;
    let EndDate = req.body.end_date;
    Id = Id || { [Op.ne]: null };
    Name = Name || { [Op.ne]: null };
    StartDate = StartDate || '2000-01-01';
    EndDate = EndDate || '2023-01-01';
    const data = await AsRequest.findAll({
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
        request_date: {
          [Op.between]: [StartDate, EndDate],
        },
      },
      order: [['createdAt', 'DESC']],
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
router.delete('/', async (req, res, next) => {
  try {
    let Id = 2;
    const data = await AsRequest.destroy({
      where: {
        as_id: Id,
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
