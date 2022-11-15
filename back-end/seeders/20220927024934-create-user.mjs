'use strict';

export async function up(queryInterface, Sequelize) {

  return queryInterface.bulkInsert('user', [
    {
      id: "6B29FC40-CA47-1067-B31D-00DD010662DA", name: "River Boladão", email: "teste@teste.com", password: "123", registration: "123", birth_date: "01/01/20001", period: 7
    }
  ]);

}
export async function down(queryInterface, Sequelize) {
  //implements down
}
