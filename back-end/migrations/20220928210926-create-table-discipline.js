'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('discipline', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      workload: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      idCourse: {
        type: Sequelize.UUID,
        references: { model: 'course', key: 'id'},
        onDelete: 'CASCADE'
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('discipline');
     
  }
};
