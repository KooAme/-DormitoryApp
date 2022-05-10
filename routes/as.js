const express = require('express');
const { Op } = require('sequelize');
const AsRequest = require('../models/as_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

// 전체조회
//'http://localhost:3001/as/request'
router.post('/', async (req, res, next) => {
  try {
    let Id = req.body.std_id;
    let Name = req.body.std_name;
    let StartDate = req.body.start_date;
    let EndDate = req.body.end_date;
    Id = Id || { [Op.ne]: null };
    Name = Name || { [Op.ne]: null };
    StartDate = StartDate || '1970-01-01';
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
      order: [['request_date', 'DESC']],
    });
    res.send('A/S 관리/조회');
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 처리 확인
//'http://localhost:3001/as/request/check'
router.put('/check', async (req, res, next) => {
  try {
    let Id = req.body.id;
    const data = await AsRequest.update(
      { confirm: true },
      {
        where: { as_id: Id },
      }
    );
    res.send('A/S 관리/처리확인');
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
