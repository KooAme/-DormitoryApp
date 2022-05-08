const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models');
const UserRouter = require('./routes/user');
const AdminRouter = require('./routes/admin');
const AsRequestRouter = require('./routes/as');
const HlthRouter = require('./routes/hlth.js');

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
app.use('/user', UserRouter);
app.use('/admin', AdminRouter);
app.use('/as', AsRequestRouter);
app.use('/hlth', HlthRouter);

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
