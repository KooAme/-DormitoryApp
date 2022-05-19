const express = require("express");
const StdInfo = require("../models/std_info");
// const AdmInfo = require('../models/adm_info');
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const StdWait = require("../models/std_wait");
//'http://localhost:3001/user' = /

router.get("/:hash", async (req, res, next) => {
  try {
    const hash = req.params.hash;
    const data = await StdWait.findAll({
      raw: true,
      where: {
        hash: hash,
      },
    });
    const Id = data[0]["std_id"];
    const Name = data[0]["std_name"];
    const Pnum = data[0]["ph_num"];
    const Rnum = data[0]["room_num"];
    const Email = data[0]["e_mail"];
    const Pw = data[0]["password"];
    if (data.length === 0) {
      console.log("잘못된 해쉬 입력");
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
    return res.redirect("http://localhost:19006");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

passport.use(
  new LocalStrategy(async function vertify(username, password, cb) {
    try {
      const data = await StdInfo.findAll({ where: { std_id: username } });
      if (!data[0]) {
        return cb(null, false, { message: "Incorrect username or password." });
      } else if (password != data[0].password) {
        return cb(null, false, { message: "Incorrect username or password." });
      }
      return cb(null, data[0].dataValues);
    } catch (e) {
      return cb(e);
    }
  })
);
passport.serializeUser(function (user, cb) {
  console.log("Serialize : ", user);
  process.nextTick(function () {
    cb(null, { id: user.std_id, username: user.std_name });
  });
});

passport.deserializeUser(function (user, cb) {
  console.log("Desealize : ", user);
  process.nextTick(function () {
    return cb(null, user);
  });
});
// 모바일 로그인
//'http://localhost:3001/auth/login'
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      const filteredUser = Object.assign({}, user);
      delete filteredUser.password;
      return res.json(filteredUser);
    });
  })(req, res, next);
});
router.post("/logout", (req, res, next) => {
  /* const sid = req.body.sessionId; */
  req.logout();
  req.session.destroy();
  return res.status(200).send("success");
});

// 모바일 비밀번호 찾기
router.post("/find/pw", async (req, res, next) => {
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
