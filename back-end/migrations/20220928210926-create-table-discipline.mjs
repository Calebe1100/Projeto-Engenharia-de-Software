'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('discipline', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    workload: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    idCourse: {
      type: DataTypes.INTEGER,
    }
  });

}
export async function down(queryInterface, Sequelize) {

  await queryInterface.dropTable('discipline');

}
