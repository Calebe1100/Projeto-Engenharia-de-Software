const { Sequelize } = require('sequelize');
const {username, password, database} = require('../config/credentialsDB');

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(() => {
    console.log('Conexão com o banco de dados criada com sucesso.');
})
.catch(() => {
    console.log('Conexão com o banco de dados falhou.');
});

module.exports = sequelize;