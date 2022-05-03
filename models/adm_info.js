const Sequelize = require('sequelize');
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        adm_id: {
          type: Sequelize.STRING(45),
          allowNull: false,
          primaryKey: true,
        },
        password: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        adm_name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'AdmInfo',
        tableName: 'adm_info',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {
    db.AdmInfo.hasMany(db.BusInfo, {
      foreignKey: 'adm_id',
      sourceKey: 'adm_id',
    });
    db.AdmInfo.hasMany(db.FoodList, {
      foreignKey: 'adm_id',
      sourceKey: 'adm_id',
    });
    db.AdmInfo.hasMany(db.Holiday, {
      foreignKey: 'adm_id',
      sourceKey: 'adm_id',
    });
    db.AdmInfo.hasMany(db.AsRequest, {
      foreignKey: 'adm_id',
      sourceKey: 'adm_id',
    });
  }
};
