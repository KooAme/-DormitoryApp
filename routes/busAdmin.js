const express = require('express');
const { Op } = require('sequelize');
const StdInfo = require('../models/std_info');
const BusRequest = require('../models/bus_request');
const router = express.Router();

//'http://localhost:3001/admin/bus' = '/'

// 셔틀 버스 예약자 조회
//'http://localhost:3001/admin/bus'
router.put('/', async (req, res, next) => {
  try {
    let Id = req.body.std_id;
    let Name = req.body.std_name;
    let BusStop = req.body.bus_stop;
    let BusDate = req.body.bus_date;
    let BusWay = req.body.bus_way;
    Id = Id || { [Op.ne]: null };
    Name = Name || { [Op.ne]: null };
    BusStop = BusStop || { [Op.ne]: null };
    BusDate = BusDate || { [Op.ne]: null };
    BusWay = BusWay || { [Op.ne]: null };

    const data = await BusRequest.findAll({
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
        bus_date: BusDate,
        bus_stop: BusStop,
        bus_way: BusWay,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
