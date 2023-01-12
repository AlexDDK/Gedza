module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Masters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      salon_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Salons',
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
      yc_master_id: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      name: {
        type: Sequelize.STRING
      },
      specialization: {
        type: Sequelize.STRING
      },
      information: {
        type: Sequelize.STRING
      },
      avatar_big: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Masters');
  }
};
