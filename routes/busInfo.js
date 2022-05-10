const express = require('express');
const BusInfo = require('../models/bus_info');
const router = express.Router();

// 셔틀 버스 관리
// 사이트 내용, DB 재 검토 필요
//'http://localhost:3001/businfo'
router.put('/', async (req, res, next) => {
  try {
    // bus_info, UI 조정 필요할것 같음
    // 아래 임시 코드
    let s_Type = req.body.type;
    let s_BusWay = req.body.bus_way;
    let s_Time = req.body.time;
    let s_busStop = req.body.bus_stop;
    s_Type = s_Type ? s_Type : { [Op.ne]: null };
    s_BusWay = s_BusWay ? s_BusWay : { [Op.ne]: null };
    s_Time = s_Time ? s_Time : { [Op.ne]: null };
    s_bustStop = s_bustStop
      ? s_bustStop
      : { [Op.ne]: null };

    const data = await BusInfo.findAll({
      where: {
        type: s_Type,
        bus_way: s_BusWay,
        time: s_Time,
        bus_stop: s_busStop,
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
