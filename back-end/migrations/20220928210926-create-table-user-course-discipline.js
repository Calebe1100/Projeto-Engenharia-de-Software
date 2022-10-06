'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('user-course-discipline', {
      
        init_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },

        finish_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },

        idCourse: {
        type: Sequelize.UUID,
        references: { model: 'course', key: 'id'},
        onDelete: 'CASCADE'
        },

        idDiscipline: {
          type: Sequelize.UUID,
          references: { model: 'discipline', key: 'id'},
          onDelete: 'CASCADE'
        }
        ,
        idUser: {
          type: Sequelize.UUID,
          references: { model: 'user', key: 'id'},
          onDelete: 'CASCADE'
        }
    });
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('user-course-discipline');
     
  }
};
