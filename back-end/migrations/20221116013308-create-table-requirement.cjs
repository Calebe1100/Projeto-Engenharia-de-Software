'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
  await queryInterface.createTable('requirement', {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    typeRequirement: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    idDisciplineRequired: {
      type: Sequelize.DataTypes.UUID,
      allowNull: false,
    },
    idDiscipline: {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: 'discipline',
        key: 'id'
      },
      allowNull: false,
      onDelete: 'CASCADE'
    }
  })

}
,
 async  down(queryInterface, Sequelize) {

  await queryInterface.dropTable('requirement');

}
}