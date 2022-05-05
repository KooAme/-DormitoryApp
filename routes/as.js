const express = require('express');
const AsRequest = require('../models/as_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

router.route('/request').post(async (req, res, next) => {
  try {
    const data = await AsRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
    });

    console.log(data);
    res.json(data);
    /*  res.json([
      {
        id: 0,
        std_id: 1801149,
        name: '신민규',
        room_num: 702,
        title: '보일러고장',
        ph_num: '010-7537-9880',
        request_date: '2022-05-05',
        confirm: '미확인',
      },
    ]); */
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
