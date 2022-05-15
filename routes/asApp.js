const express = require('express');
const { Op } = require('sequelize');
const AsRequest = require('../models/as_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

// 모바일 a/s 신청
//'http://localhost:3001/as/request' == '/request'
router.post('/request', async (req, res, next) => {
  try {
    AsRequest.create({
      title: req.body.title,
      content: req.body.content,
      confirm: false,
      request_date: Date.now(),
      vst_date: req.body.allow,
    });
    res.send('성공');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 모바일 a/s 신청 수정
//'http://localhost:3001/as/update' == '/update'
router.post('/update', async (req, res, next) => {
  try {
    let Id = req.body.std_id;
    let Name = req.body.std_name;
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
      order: [['as_id', 'DESC']],
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
