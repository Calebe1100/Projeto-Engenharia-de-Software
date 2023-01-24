'use strict';

module.exports = {
 async up(queryInterface, Sequelize) {
 return queryInterface.createTable('user', {
   id: {
     type: Sequelize.DataTypes.UUID,
     defaultValue: Sequelize.UUIDV4,
     primaryKey: true,
   },
   name: {
     type: Sequelize.DataTypes.STRING(100),
     allowNull: false,
   },
   email: {
     type: Sequelize.DataTypes.STRING(255),
     allowNull: false,
     unique: true,
   },
   password: {
     type: Sequelize.DataTypes.STRING(20),
     allowNull: false,
   },
   registration: {
     type: Sequelize.DataTypes.STRING(11),
     allowNull: false,
   },
   birth_date: {
     type: Sequelize.DataTypes.DATEONLY,
     allowNull: true,
   },
   period: {
     type: Sequelize.DataTypes.INTEGER,
     allowNull: true,
   }
 })
}
,

 async down(queryInterface, Sequelize) {
 return queryInterface.dropTable('user');
}
}
 