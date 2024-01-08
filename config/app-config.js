const env = require("dotenv");
env.config();

const APP_CONFIG = {    
    PORT: process.env.PORT || '3000',
    DB_URI: process.env.DB_URI || "mongodb://127.0.0.1:27017/speerTask",
    JWT_KEY: process.env.JWT_SECRET_KEY
}

module.exports = APP_CONFIG;