const express = require('express');
const StdInfo = require('../models/std_info');
const router = express.Router();
const StdWait = require('../models/std_wait');

//'http://localhost:3001/signin' = /
router.post('/', async (req, res, next) => {
  try {
    const hash = req.body.hash;
    var data = await StdWait.findAll({
      raw: true,
      where: {
        hash: hash,
      },
    });
    console.log(data);
    const Id = data[0]['std_id'];
    const Name = data[0]['std_name'];
    const Pnum = data[0]['ph_num'];
    const Rnum = data[0]['room_num'];
    const Email = data[0]['e_mail'];
    const Pw = data[0]['password'];
    console.log(Id, Name, Pnum, Rnum, Email, Pw);
    if (data.length === 0) {
      console.log('잘못된 해쉬 입력');
    } else {
      StdInfo.create({
        std_id: Id,
        std_name: Name,
        ph_num: Pnum,
        room_num: Rnum,
        e_mail: Email,
        password: Pw,
      });
      StdWait.destroy({
        where: { hash: hash },
      });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
