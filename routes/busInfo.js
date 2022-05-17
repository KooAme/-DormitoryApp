const express = require('express');
const { Op } = require('sequelize');
const BusInfo = require('../models/bus_info');
const router = express.Router();

//'http://localhost:3001/admin/businfo' = '/'

// 셔틀 버스 조회
//'http://localhost:3001/admin/businfo'
router.post('/', async (req, res, next) => {
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
      order: [
        ['bus_date', 'ASC'],
        ['type', 'ASC'],
        ['bus_times', 'ASC'],
        ['bus_time', 'ASC']
      ],
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 셔틀 버스 수정
//'http://localhost:3001/admin/businfo'
router.patch('/', async (req, res, next) => {
  try {
    const data = await BusInfo.update({
      bus_date: req.body.bus_date,
      bus_way: req.body.bus_way,
      bus_stop: req.body.bus_stop,
      bus_time: req.body.bus_time,
      where: {
        bus_id: req.body.bus_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 셔틀 버스 등록
//'http://localhost:3001/admin/businfo/create'
router.post('/create', async (req, res, next) => {
  try {
    const data = await BusInfo.create({
      bus_date: req.body.bus_date,
      bus_stop: req.body.bus_stop,
      bus_time: req.body.bus_time,
      bus_times: req.body.bus_times,
      type: req.body.type,
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 셔틀 버스 삭제
//'http://localhost:3001/admin/businfo'
router.delete('/', async (req, res, next) => {
  try {
    const data = await BusInfo.destroy({
      where: {
        bus_id:req.body.bus_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
