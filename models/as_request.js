const Sequelize = require('sequelize');
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        as_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        confirm: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        request_date: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        vst_date: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        repair_date: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        std_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'AsRequest',
        tableName: 'as_request',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {
    db.AsRequest.belongsTo(db.AdmInfo, {
      foreignKey: 'adm_id',
      sourceKey: 'adm_id',
    });
    db.AsRequest.belongsTo(db.StdInfo, {
      foreignKey: 'std_id',
      sourceKey: 'std_id',
    });
  }
};
