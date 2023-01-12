const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Salon, Url, Category, Service, Master, Work_Photo, Template, Review
    }) {
      this.hasMany(Salon, { foreignKey: 'user_id' });
      this.hasMany(Url, { foreignKey: 'user_id' });
      this.hasMany(Category, { foreignKey: 'user_id' });
      this.hasMany(Review, { foreignKey: 'user_id' });
      this.hasMany(Service, { foreignKey: 'user_id' });
      this.hasMany(Master, { foreignKey: 'user_id' });
      this.hasMany(Work_Photo, { foreignKey: 'user_id' });
      this.hasMany(Template, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    yc_user_token: DataTypes.TEXT,
    yc_id: DataTypes.INTEGER,
    role: DataTypes.STRING,
    bookForm: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
