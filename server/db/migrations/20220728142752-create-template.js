module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Templates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      url_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Urls',
          },
          key: 'id',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      block_1: {
        type: Sequelize.BOOLEAN
      },
      block_2: {
        type: Sequelize.BOOLEAN
      },
      block_3: {
        type: Sequelize.BOOLEAN
      },
      block_4: {
        type: Sequelize.BOOLEAN
      },
      block_5: {
        type: Sequelize.BOOLEAN
      },
      block_6: {
        type: Sequelize.BOOLEAN
      },
      block_7: {
        type: Sequelize.BOOLEAN
      },
      block_8: {
        type: Sequelize.BOOLEAN
      },
      block_9: {
        type: Sequelize.BOOLEAN
      },
      block_10: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Templates');
  }
};
