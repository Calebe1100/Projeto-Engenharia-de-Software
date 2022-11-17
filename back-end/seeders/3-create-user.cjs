'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

  return queryInterface.bulkInsert('user', [
    {
      id: "66cdaf89-0b2b-42df-81e5-465c77913146", name: "River Boladão", email: "teste@teste.com", password: "123", registration: "123", birth_date: "01/01/20001", period: 7
    }
  ]);

},
 async  down(queryInterface, Sequelize) {
  //implements down
}
}