const express = require('express');
const StdInfo = require('../models/std_info');
const Holiday = require('../models/holiday');
const router = express.Router();

// 휴일 관리
//'http://localhost:3001/holiday'
router.put('/', async (req, res, next) => {
  try {
    // 아래 임시 코드
    let s_name = req.body.name;
    let s_date = req.body.date;
    s_name = s_name ? s_name : { [Op.ne]: null };
    s_date = s_date ? s_date : { [Op.ne]: null };
    const data = await Holiday.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        name: s_name,
        date: s_date,
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
