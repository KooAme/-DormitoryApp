const express = require("express");
const { Op } = require("sequelize");
const AsRequest = require("../models/as_request");
const StdInfo = require("../models/std_info");
const router = express.Router();
/* StdInfo.create({
  std_id: 1701162,
  std_name: '오희재',
  ph_num: '01012341234',
  room_num: 715,
  e_mail: 'maf@naver.com',
  password: '1234',
});
StdInfo.create({
  std_id: 1801149,
  std_name: '신민규',
  ph_num: '01012341234',
  room_num: 702,
  e_mail: 'Min@naver.com',
  password: '1234',
});

AsRequest.create({
  as_id: 1,
  title: '창문깨짐',
  content: '에베베베',
  confirm: 0,
  request_date: '2020-05-05',
  vst_date: 0,
  repair_date: null,
  std_id: 1701162,
  adm_id: null,
});
AsRequest.create({
  as_id: 0,
  title: '보일러고장',
  content: '에베베베',
  confirm: 0,
  request_date: '2020-05-07',
  vst_date: 0,
  repair_date: null,
  std_id: 1801149,
  adm_id: null,
}); */

// 전체조회
router.post("/", async (req, res, next) => {
  try {
    const data = await AsRequest.findAll({
      include: [
        {
          model: StdInfo
        }
      ]
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
