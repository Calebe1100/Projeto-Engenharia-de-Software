'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('course', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      mandatory_workload: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      optional_workload: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      complementary_workload: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('course');

  }
};
