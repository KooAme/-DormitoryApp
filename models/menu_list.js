const Sequelize = require('sequelize');
module.exports = class MenuList extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        menu_id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        menu: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'MenuList',
        tableName: 'menu_list',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {
  }
};
