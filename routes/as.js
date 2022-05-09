const express = require('express');
const { Op } = require('sequelize');
const AsRequest = require('../models/as_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

// 전체조회
router.post('/', async (req, res, next) => {
  try {
    let Id = req.body.std_id;
    let Name = req.body.std_name;
    // let StartDate = '2020-05-05'; // 검색 시작 날
    let StartDate = req.body.start_date; //   검색  날
    let EndDate = req.body.end_date; //   검색   날
    Id = Id || { [Op.ne]: null };
    Name = Name || { [Op.ne]: null };
    StartDate = StartDate || Date.now();
    EndDate = EndDate || Date.now();
    /* const data = await AsRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        std_id: '1801149',
        // std_name: s_Name, 이거 빼면 잘됨;
      },
    }); */
    const data = await AsRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      /* where: {
        request_date: {
          [Op.between]: [StartDate, EndDate],
        },
      }, */
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//학번 검색
/* router.post('/request',async (req, res, next) => {
  try {
    const data = await AsRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        std_id: '1701162',
        // std_id: '1801149',
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
}); */
//날짜 검색
/* router.post('/request', async (req, res, next) => {
  try {
    // const startDate = req.body.startDate; // 검색 시작 날
    const startDate = '2020-05-05'; // 검색 시작 날
    const EndDate = req.body.startDate; //   검색 끝  날
    const data = await AsRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        EndDate: undefined,
        request_date: {
          [Op.between]: [startDate, new Date()],
        },
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
}); */

module.exports = router;
