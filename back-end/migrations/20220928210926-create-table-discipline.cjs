'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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
    typeDiscipline: {
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
  })

}
,
 async  down(queryInterface, Sequelize) {

  await queryInterface.dropTable('discipline');

}
}
