'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('course', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    mandatory_workload: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    optional_workload: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    complementary_workload: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(255),
      allowNull: true,
    }
  });

}
export async function down(queryInterface, Sequelize) {

  await queryInterface.dropTable('course');

}
