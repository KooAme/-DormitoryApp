const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models');
const asRouter = require('./routes/as');
const signinRouter = require('./routes/signin');

const app = express();
app.set('port', process.env.PORT || 3001);
sequelize
  .sync({ force: true })
  // .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch(err => {
    console.error(err);
  });
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/as/request', asRouter);
app.use('/signin', signinRouter);

app.use((req, res, next) => {
  const error = new Error(
    `${req.method} ${req.url} 라우터가 없습니다.`
  );
  error.status = 404;
  next(error);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
