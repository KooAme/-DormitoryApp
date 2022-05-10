const express = require('express');
const StdInfo = require('../models/std_info');
const router = express.Router();

// 사용자 관리
// UI 조정, 재검토 필요
//'http://localhost:3001/admin/agree'
router.put('/', async (req, res, next) => {
  try {
    // 관리자가 학생에게 사이트 로그인 권한을 부여해줌
    let checkedStd = req.body.std_id; // 체크된 학생의 학번
    StdInfo.update(
      {
        access: true,
      },
      { where: { std_id: checkedStd } }
    );
    res.send('회원 권한을 줌');
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
