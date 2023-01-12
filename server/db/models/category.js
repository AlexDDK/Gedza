const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Salon, User, Service }) {
      this.belongsTo(Salon, { foreignKey: 'salon_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Service, { foreignKey: 'yc_cat_id' });
    }
  }
  Category.init({
    salon_id: DataTypes.INTEGER,
    yc_cat_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
