const express = require('express');
const { Op } = require('sequelize');
const MenuList = require('../models/menu_list');
const router = express.Router();

// 식단표 관리
//'http://localhost:3001/admin/menu'
router.put('/', async (req, res, next) => {
  try {
    // 해당 날짜의 조식 중식 석식 조회
    let Date = req.body.date;
    Date = Date || { [Op.ne]: null };
    const data = await MenuList.findAll({
      where: {
        date: Date,
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
