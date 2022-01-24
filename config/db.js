const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  dev: {
    user: process.env.DEV_DB_USER,
    host: process.env.DEV_DB_HOST,
    database: process.env.DEV_DB_DATABASE,
    password: process.env.DEV_DB_PASSWORD,
    port: process.env.DEV_DB_PORT,
    dateStrings: ["DATE", "DATETIME"],
    timezone: "+09:00",
    multipleStatements: true,
  },
  prod: {
    user: process.env.PROD_DB_USER,
    host: process.env.PROD_DB_USER,
    database: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_USER,
    port: process.env.PROD_DB_USER,
    dateStrings: ["DATE", "DATETIME"],
    timezone: "+09:00",
    multipleStatements: true,
  },
};
