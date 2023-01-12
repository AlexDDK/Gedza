const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Work_Photo extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Work_Photo.init({
    user_id: DataTypes.INTEGER,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Work_Photo',
  });
  return Work_Photo;
};
