const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models');
const UserRouter = require('./routes/user');
const AgreeAdminRouter = require('./routes/agree');
const AsAdminRouter = require('./routes/as');
const BusReqAdminRouter = require('./routes/busReq');
const BusInfoAdminRouter = require('./routes/busInfo');
const HlthAdminRouter = require('./routes/hlth');
const HolidayAdminRouter = require('./routes/holiday');
const MenuAdminRouter = require('./routes/menu');
const StayoutAdminRouter = require('./routes/stayout');

const app = express();
app.set('port', process.env.PORT || 8080);
sequelize
  .sync({ force: true })
  // .sync({ force: true }) !true시 테이블 새로 생성됨!
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch(err => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 라우터
// 사용자 앱
app.use('/user', UserRouter); // 로그인

// 관리자 웹
// 관리자 예약관리
app.use('/admin/as', AsAdminRouter); // A/S
app.use('/admin/hlth', HlthAdminRouter); // 헬스
app.use('/admin/stayout', StayoutAdminRouter); // 외박
app.use('/admin/busreq', BusReqAdminRouter); // 셔틀 버스

// 관리자 생활관 관리
app.use('/admin/menu', MenuAdminRouter); // 식단표
app.use('/admin/businfo', BusInfoAdminRouter); // 버스 시간표
app.use('/admin/holiday', HolidayAdminRouter); // 휴일
app.use('/admin/agree', AgreeAdminRouter); // 사용자 회원인증

app.use((req, res, next) => {
  const error = new Error(
    `${req.method} ${req.url} 라우터가 없습니다.`
  );
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error =
    process.env.NODE_ENV !== 'production' ? err : {};
  res.stats(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
