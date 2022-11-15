'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('user_course_discipline', {
    init_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    finish_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    idCourse: {
      type: Sequelize.INTEGER,
      references: { model: 'course', key: 'id' },
      onDelete: 'CASCADE'
    },

    idDiscipline: {
      type: Sequelize.UUID,
      references: { model: 'discipline', key: 'id' },
      onDelete: 'CASCADE'
    },

    idUser: {
      type: Sequelize.UUID,
      references: { model: 'user', key: 'id' },
      onDelete: 'CASCADE'
    }
  });

}
export async function down(queryInterface, Sequelize) {

  await queryInterface.dropTable('user_course_discipline');

}
