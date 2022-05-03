const Sequelize = require('sequelize');
const AdmInfo = require('./adm_info');
const AsRequest = require('./as_request');
const BusInfo = require('./bus_info');
const BusRequest = require('./bus_request');
const FoodList = require('./food_list');
const HlthRequest = require('./hlth_request');
const Holiday = require('./holiday');
const StayoutRequest = require('./stayout_request');
const StdInfo = require('./std_info');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname +
  '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.AdmInfo = AdmInfo;
db.AsRequest = AsRequest;
db.BusInfo = BusInfo;
db.BusRequest = BusRequest;
db.FoodList = FoodList;
db.HlthRequest = HlthRequest;
db.Holiday = Holiday;
db.StayoutRequest = StayoutRequest;
db.StdInfo = StdInfo;

AdmInfo.init(sequelize);
AsRequest.init(sequelize);
BusInfo.init(sequelize);
BusRequest.init(sequelize);
FoodList.init(sequelize);
HlthRequest.init(sequelize);
Holiday.init(sequelize);
StayoutRequest.init(sequelize);
StdInfo.init(sequelize);

AdmInfo.associate(db);
AsRequest.associate(db);
BusInfo.associate(db);
BusRequest.associate(db);
FoodList.associate(db);
HlthRequest.associate(db);
Holiday.associate(db);
StayoutRequest.associate(db);
StdInfo.associate(db);

module.exports = db;
