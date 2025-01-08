require("dotenv").config();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;


module.exports = {DB_URL,PORT,SECRET_KEY};