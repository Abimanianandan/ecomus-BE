require("dotenv").config();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;

module.exports = {DB_URL,PORT};