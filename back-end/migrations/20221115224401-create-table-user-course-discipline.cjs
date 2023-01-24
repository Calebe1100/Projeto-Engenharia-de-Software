'use strict';

module.exports = {
  async  up(queryInterface, Sequelize) {
  await queryInterface.createTable('user_course_discipline', {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    init_date: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },

    finish_date: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    idCourse: {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: {
          tableName: 'course',
          schema: 'public'
        },
        key: 'id'
      },
      allowNull: false,
      onDelete: 'CASCADE'
    },
    idDiscipline: {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: {
          tableName: 'discipline',
          schema: 'public'
        },
        key: 'id'
      },
      allowNull: false,
      onDelete: 'CASCADE'
    },
    idUser: {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: {
          tableName: 'user',
          schema: 'public'
        },
        key: 'id'
      },
      allowNull: false,
      onDelete: 'CASCADE'
    }
  })

},
 async down(queryInterface, Sequelize) {

  await queryInterface.dropTable('user_course_discipline');

}
}