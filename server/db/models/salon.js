const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Salon extends Model {
    static associate({
      User, Master, Url, Category,
    }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Master, { foreignKey: 'salon_id' });
      this.belongsTo(Url, { foreignKey: 'url_id' });
      this.hasMany(Category, { foreignKey: 'salon_id' });
    }
  }
  Salon.init({
    yc_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    url_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    logo: DataTypes.STRING,
    short_descr: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.TEXT,
    city: DataTypes.STRING,
    schedule: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    vk: DataTypes.STRING,
    telegram: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    viber: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Salon',
  });
  return Salon;
};
