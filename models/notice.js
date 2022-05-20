const Sequelize = require('sequelize');
module.exports = class Notice extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        notice_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        create_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        view: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Notice',
        tableName: 'notice',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {
    db.Notice.belongsTo(db.AdmInfo, {
      foreignKey: "adm_id",
      sourceKey: "adm_id",
    })
  };
};
