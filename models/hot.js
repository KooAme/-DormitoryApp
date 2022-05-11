const Sequelize = require('sequelize');
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        /* id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
        }, */
        hot_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique:true,
          autoIncrement:true,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Hot',
        tableName: 'hot',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {
    db.Holiday.belongsTo(db.AdmInfo, {
      foreignKey: 'bulletin_id',
      sourceKey: 'bulletin_id',
    });
  }
};
