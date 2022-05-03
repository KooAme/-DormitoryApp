const Sequelize = require('sequelize');
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        hlth_id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        req_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        req_time: {
          type: Sequelize.TIME,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'HlthRequest',
        tableName: 'hlth_request',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {
    db.HlthRequest.belongsTo(db.StdInfo, {
      foreignKey: 'std_id',
      sourceKey: 'std_id',
    });
  }
};
