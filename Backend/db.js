const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        port: process.env.DB_PORT || '5432',
        logging: false,
    }
);

sequelize
.authenticate()
.then(() => console.log('Database Connected Successfully'))
.catch((error) => console.error('Unable to connect to db', error));

sequelize.sync({ alter: true }) // Adjust the schema if needed
  .then(() => console.log('All models were synchronized successfully.'))
  .catch((error) => console.error('Failed to sync models', error));

module.exports = sequelize;
