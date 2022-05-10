const express = require('express');
const { Op } = require('sequelize');
const BusInfo = require('../models/bus_info');
const router = express.Router();

// 셔틀 버스 관리
// 사이트 내용, DB 재 검토 필요
//'http://localhost:3001/businfo'
router.put('/', async (req, res, next) => {
  try {
    // bus_info, UI 조정 필요할것 같음
    // 아래 임시 코드
    let Type = req.body.type;
    let BusWay = req.body.bus_way;
    let Time = req.body.time;
    let BusStop = req.body.bus_stop;
    Type = Type || { [Op.ne]: null };
    BusWay = BusWay || { [Op.ne]: null };
    Time = Time || { [Op.ne]: null };
    BusStop = BusStop || { [Op.ne]: null };

    const data = await BusInfo.findAll({
      where: {
        type: Type,
        bus_way: BusWay,
        time: Time,
        bus_stop: BusStop,
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
