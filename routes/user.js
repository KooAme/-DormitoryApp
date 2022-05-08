const express = require('express');
const StdInfo = require('../models/std_info');
const AdmInfo = require('../models/adm_info');
const { where } = require('sequelize/types');
const router = express.Router();

//'http://localhost:3001/user' = /

// 로그인
//'http://localhost:3001/user/login'
router.post('/login', async (req, res, next) => {
  try {
    // 로그인 했을때 access가 true면 로그인 성공
    const inputStdId = req.body.std_id; // 입력한 학번
    const inputPw = req.body.password; // 입력한 비밀번호
    const user = await StdInfo.findAll({
      attributes: ['std_id', 'password', 'access'],
      where: {
        std_id: inputStdId,
        password: inputPw,
      },
    });
    if (user) {
      if (user.access) {
        res.send('로그인 성공');
      } else {
        res.send('로그인 실패(승인 되지 않은 아이디)');
      }
    } else {
      res.send(
        '아이디 혹은 비밀번호를 다시 입력해 주세요.'
      );
    }
    console.log(req.body);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 회원가입
//'http://localhost:3001/user/signin'
router.post('/signin', async (req, res, next) => {
  try {
    // 회원가입 창에서 입력한대로 StdInfo에 Insert
    const account = req.body;
    StdInfo.create({
      std_id: account.std_id,
      std_name: account.std_name,
      password: account.password,
      ph_num: account.ph_num,
      room_num: account.room_num,
      e_mail: account.e_mail,
      access: false, // 관리자가 권환을 줘야지 true
    });
    console.log('회원가입 완료');
    console.log(account);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//비밀번호 찾기
router.post('/find/pw', async (req, res, next) => {
  try {
    // 학번, 나이 입력후 본인확인이 가능한 것(문자인증, 이메일인증) 으로
    // 본인인증이 되면 새 비밀번호로 변경
    console.log(req.body);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
