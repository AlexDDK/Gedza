const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Template extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Url }) {
      this.belongsTo(Url, { foreignKey: 'url_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Template.init({
    url_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    block_1: DataTypes.BOOLEAN,
    block_2: DataTypes.BOOLEAN,
    block_3: DataTypes.BOOLEAN,
    block_4: DataTypes.BOOLEAN,
    block_5: DataTypes.BOOLEAN,
    block_6: DataTypes.BOOLEAN,
    block_7: DataTypes.BOOLEAN,
    block_8: DataTypes.BOOLEAN,
    block_9: DataTypes.BOOLEAN,
    block_10: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Template',
  });
  return Template;
};
