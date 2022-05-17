const express = require('express');
const { Op } = require('sequelize');
const MenuList = require('../models/menu_list');
const router = express.Router();

//'http://localhost:3001/admin/menu' = '/'

// 식단표 조회
//'http://localhost:3001/admin/menu'
router.post('/', async (req, res, next) => {
  try {
    let date = req.body.date;
    let Type = req.body.type;
    date = date || { [Op.ne]: null };
    Type = Type || { [Op.ne]: null };
    const data = await MenuList.findAll({
      where: {
        date: date,
        type: Type,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 식단표 수정
//'http://localhost:3001/admin/menu'
router.patch('/', async (req, res, next) => {
  try {
    const data = await MenuList.update({
      date: req.body.date,
      type: req.body.type,
      menu: req.body.menu,
      where: {
        menu_id: req.body.menu_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 식단표 등록
//'http://localhost:3001/admin/menu/create'
router.post('/create', async (req, res, next) => {
  try {
    const data = await MenuList.create({
      date: req.body.date,
      type: req.body.type,
      menu: req.body.menu,
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 식단표 삭제
//'http://localhost:3001/admin/menu'
router.delete('/', async (req, res, next) => {
  try {
    const data = await MenuList.update({
      where: {
        menu_id: req.body.menu_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
