const express = require('express');
const { Op } = require('sequelize');
const AsRequest = require('../models/as_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/admin/as' = '/'

// A/S 신청 조회
//'http://localhost:3001/admin/as'
router.post('/', async (req, res, next) => {
  try {
    let Id = req.body.std_id;
    let Name = req.body.std_name;
    let StartDate = req.body.start_date;
    let EndDate = req.body.end_date;
    Id = Id || { [Op.ne]: null };
    Name = Name || { [Op.ne]: null };
    StartDate = StartDate || '1970-01-01';
    EndDate = EndDate || new Date();
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
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// A/S 처리 확인
//'http://localhost:3001/admin/as'
router.patch('/', async (req, res, next) => {
  try {
    let Id = req.body.id;
    const data = await AsRequest.update(
      { repair_date:Date.now() },
      {
        where: { as_id: Id },
      }
    );
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
