'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('course', [
      { id: uuidv4(), name: "Engenharia da Computação", mandatory_workload: 4000,optional_workload: 450, complementary_workload: 450, description: "Engenharia da computação - Campus Cefet Timóteo - MG" },
      { id: uuidv4(), name: "Engenharia Metalúrgica", mandatory_workload: 3400,optional_workload: 400, complementary_workload: 350, description: "Engenharia Metalúrgica - Campus Cefet Timóteo - MG" }
    ]);
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
