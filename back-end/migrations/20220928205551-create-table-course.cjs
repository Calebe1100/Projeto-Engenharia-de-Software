'use strict';

module.exports = {
  async  up(queryInterface, Sequelize) {
  await queryInterface.createTable('course', {
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    mandatory_workload: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    optional_workload: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    complementary_workload: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: true,
    }
  })
}

,
 async down(queryInterface, Sequelize) {

  await queryInterface.dropTable('course');

}
}
