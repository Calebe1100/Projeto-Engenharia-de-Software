'use strict';

module.exports = {
  async  up(queryInterface, Sequelize) {
  await queryInterface.createTable('user_course_discipline', {
    init_date: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: false,
    },

    finish_date: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: false,
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
      onDelete: 'CASCADE'
    }
  })

},
 async down(queryInterface, Sequelize) {

  await queryInterface.dropTable('user_course_discipline');

}
}