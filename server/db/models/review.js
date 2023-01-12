const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Review.init({
    client_name: DataTypes.STRING,
    title: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
