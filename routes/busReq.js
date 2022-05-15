const express = require('express');
const BusRequest = require('../models/bus_request');
const router = express.Router();

//'http://localhost:3001/bus/create'
router.post('/create', async (req, res, next) => {
  try {
    const data = await BusRequest.create({
      bus_date: req.body.bus_date,
      bus_way: req.body.bus_way,
      bus_ride: req.body.bus_ride,
      bus_time: req.body.bus_time,
      std_id: req.body.std_id,
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 'http://localhost:3001/bus/search'
// 학번으로 날짜, 탑승 정류장, 시간 조회 후 PK 순으로 정렬
router.post('/search', async (req, res, next) => {
  try {
    const data = await BusRequest.findAll({
      attributes:['bus_date', 'bus_ride', 'bus_time'],
      where: {
        std_id: req.body.std_id,
      },
      order:[['bus_req_id', 'DESC']]
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 'http://localhost:3001/bus/update'
// PK, 학번으로 수정
router.post('/update', async (req, res, next) => {
  try {
    const data = await BusRequest.update({
      bus_date: req.body.bus_date,
      bus_way: req.body.bus_way,
      bus_ride: req.body.bus_ride,
      bus_time: req.body.bus_time,
      where: {
        bus_req_id: req.body.bus_req_id,
        std_id: req.body.std_id,
      }
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 'http://localhost:3001/bus/delete'
// PK, 학번으로 삭제
router.post('/delete', async (req, res, next) => {
  try {
    const data = await BusRequest.destroy({
      where: {
        bus_req_id: req.body.bus_req_id,
        std_id: req.body.std_id,
      }
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
})

module.exports = router;