const dotenv = require("dotenv");

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// config() will read your .env file, parse the contents, assign it to process.env.
const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("Couldn't find the .env file");
}

const AppConfig = {
    env: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10),
    api: {
        prefix: "/api",
    },
    logs: {
        level: process.env.LOG_LEVEL || "debug",
    },
    envProduction: "production",
    envDevelopment: "development",
};

// Export a application specific object to expose env properties
module.exports = AppConfig;
