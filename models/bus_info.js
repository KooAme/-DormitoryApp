const Sequelize = require('sequelize');
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        bus_id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        stop_stop: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'BusInfo',
        tableName: 'bus_info',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {
    db.BusInfo.belongsTo(db.AdmInfo, {
      foreignKey: 'adm_id',
      sourceKey: 'adm_id',
    });
  }
};
