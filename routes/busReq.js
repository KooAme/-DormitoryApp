const express = require('express');
const { StdInfo } = require('../models');
const BusRequest = require('../models/bus_request');
const router = express.Router();

// 셔틀 버스 예약자 관리
//'http://localhost:3001/busreq'
router.put('/', async (req, res, next) => {
  try {
    let s_Id = req.body.std_id;
    let s_Name = req.body.std_name;
    let s_BusStop = req.body.bus_stop;
    let s_BusDate = req.body.bus_date;
    s_Id = s_Id ? s_Id : { [Op.ne]: null };
    s_Name = s_Name ? s_Name : { [Op.ne]: null };
    s_BusStop = s_BusStop ? s_BusStop : { [Op.ne]: null };
    s_BusDate = s_BusDate ? s_BusDate : { [Op.ne]: null };

    const data = await BusRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        std_id: s_Id,
        std_name: std_name,
        bus_date: s_BusDate,
        bus_stop: s_BusStop,
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
