'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
  await queryInterface.createTable('discipline', {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    workload: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    typeDiscipline: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },  
    description: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: true,
    },
    idCourse: {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: 'course',
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  })

}
,
 async  down(queryInterface, Sequelize) {

  await queryInterface.dropTable('discipline');

}
}