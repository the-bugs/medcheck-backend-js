const { Sequelize } = require("sequelize");

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    timezone: "-03:00",
    logging: false,
});

async function authenticate(connection) {
    try {
        await connection.authenticate();
        console.log("Conexão com o banco de dados estabelecida com sucesso!");
    } catch (e) {
        console.log("Um erro inesperado acontece: ", e);
    }
}

module.exports = { connection, authenticate };