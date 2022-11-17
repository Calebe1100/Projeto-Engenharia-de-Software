'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('course', [
      {
        id: "6b29fc40-ca47-1067-b31d-00dd010662da", name: "Engenharia da Computação", mandatory_workload: 3400,optional_workload: 480, complementary_workload: 360, description: "Engenharia da computação - Campus Cefet Timóteo - MG"
      }
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
