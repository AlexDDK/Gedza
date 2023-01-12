const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Url extends Model {
    static associate({ User, Salon, Template }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Salon, { foreignKey: 'url_id' });
      this.hasMany(Template, { foreignKey: 'salon_id' });
    }
  }
  Url.init({
    user_id: DataTypes.INTEGER,
    url: DataTypes.TEXT,
    template: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Url',
  });
  return Url;
};
