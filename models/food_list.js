const Sequelize = require("sequelize");
module.exports = class FoodList extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        food_id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false
        },
        type: {
          type: Sequelize.STRING(30),
          allowNull: false
        },
        menu: {
          type: Sequelize.STRING(30),
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "FoodList",
        tableName: "food_list",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci"
      }
    );
  }
  static associate(db) {
    db.FoodList.belongsTo(db.AdmInfo, {
      foreignKey: "adm_id",
      sourceKey: "adm_id"
    });
  }
};
