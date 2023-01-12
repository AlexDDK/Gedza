module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Salons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      yc_id: {
        type: Sequelize.INTEGER,
        unique: true,
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
      url_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Urls',
          },
          key: 'id',
        },
      },
      title: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      short_descr: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.STRING
      },
      schedule: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      vk: {
        type: Sequelize.STRING
      },
      telegram: {
        type: Sequelize.STRING
      },
      whatsapp: {
        type: Sequelize.STRING
      },
      viber: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Salons');
  }
};
