'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('user', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
    },
    registration: {
      type: Sequelize.STRING(11),
      allowNull: false,
    },
    birth_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    period: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });
}
export async function down(queryInterface, Sequelize) {

  await queryInterface.dropTable('user');
}
