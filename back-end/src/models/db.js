import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js";

const dbName = process.env.DB_NAME; // passar os dados do .env para as constantes
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres'
});

sequelize.authenticate()
.then(() => {
    console.log('Conexão criada com sucesso.');
})
.catch(() => {
    console.log('Falha de conexão! Contate o suporte.');
});

sequelize.sync();

export default sequelize;