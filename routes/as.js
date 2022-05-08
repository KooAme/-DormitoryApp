const express = require('express');
const { Op } = require('sequelize');
const AsRequest = require('../models/as_request');
const StdInfo = require('../models/std_info');
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
//'http://localhost:3001/as'
router.post('/request', async (req, res, next) => {
  try {
    // let s_Id = req.body.std_id;
    let s_Id = req.body.std_id;
    let s_Name = req.body.std_name;
    s_Id = s_Id ? s_Id : { [Op.ne]: null };
    s_Name = s_Name ? s_Name : { [Op.ne]: null };
    /*  let s_StartDate = req.body.startDate;
    let s_EndDate = req.body.endDate; */
    const data = await AsRequest.findAll({
      include: [
        {
          model: StdInfo,
          /*  s_StartDate: s_StartDate
          ? s_StartDate
          : { ne: null },
        s_EndDate: s_EndDate ? s_EndDate : { ne: null }, */
        },
      ],
      where: {
        [Op.and]: [
          {
            std_id: s_Id,
          },
        ],
      },
    });
    console.log(s_Id);
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

module.exports = router;
