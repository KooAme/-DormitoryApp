const express = require('express');
const Holiday = require('../models/holiday');
const router = express.Router();

// 휴일 관리
//'http://localhost:3001/holiday'
router.post('/', async (req, res, next) => {
  try {
    let Name = req.body.name;
    let Date = req.body.date;
    Name = Name || { [Op.ne]: null };
    Date = Date || { [Op.ne]: null };
    // 아래 임시 코드
    const data = await Holiday.findAll({
      where: {
        name: Name,
        date: Date,
      },
    });
    res.send('휴일 관리/조회');
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//'http://localhost:3001/holiday/add'
router.post('/add', async (req, res, next) => {
  try {
    // 아래 임시 코드
    let Name = req.body.name;
    let Date = req.body.date;
    const data = await Holiday.create({
      name: Name,
      date: Date,
    });
    re.send('휴일 관리/추가');
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//'http://localhost:3001/holiday'
router.delete('/', async (req, res, next) => {
  try {
    // 아래 임시 코드
    let Name = req.body.name;
    let Date = req.body.date;
    Holiday.destroy({
      where: {
        name: Name,
        date: Date,
      },
    });
    re.send('휴일 관리/제거');
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
