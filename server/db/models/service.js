const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate({ User, Category }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Category, { foreignKey: 'yc_cat_id' });
    }
  }
  Service.init({
    yc_cat_id: DataTypes.INTEGER,
    yc_serv_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    comment: DataTypes.TEXT,
    path: DataTypes.TEXT,
    display: DataTypes.BOOLEAN,
    price_min: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};
