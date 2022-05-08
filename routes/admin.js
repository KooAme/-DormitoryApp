const express = require('express');
const StdInfo = require('../models/std_info');
const router = express.Router();

//'http://localhost:3001/admin' = /

// 관리자 승인
//'http://localhost:3001/admin/agree'
router.put('/agree', async (req, res, next) => {
  try {
    // 관리자가 학생에게 사이트 로그인 권한을 부여해줌
    const checkedStd = req.body.std_id; // 체크된 학생의 학번
    StdInfo.update(
      {
        access: true,
      },
      { where: { std_id: checkedStd } }
    );
    console.log('회원 권한을 줌');
  } catch (err) {
    console.error(err);
    next(err);
  }
});
