const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Master extends Model {
    static associate({ Salon, User }) {
      this.belongsTo(Salon, { foreignKey: 'salon_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Master.init({
    salon_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    yc_master_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    specialization: DataTypes.STRING,
    information: DataTypes.STRING,
    avatar_big: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Master',
  });
  return Master;
};
