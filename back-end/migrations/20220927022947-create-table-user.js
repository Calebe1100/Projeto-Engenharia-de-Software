/* 'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user',{
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      registration: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },
      birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      period: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      idCourse: {
        type: DataTypes.UUID,
        references: { model: 'course', key: 'id' },
        onDelete: 'CASCADE'
      }
    } )
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('user');   
  }
};
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      registration: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false,
      },
      birth_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      period: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
}