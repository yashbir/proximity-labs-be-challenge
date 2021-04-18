const winston = require("winston");
const appConfig = require("../config/app_config");

const transports = [];
if (process.env.NODE_ENV !== appConfig.envDevelopment) {
    transports.push(new winston.transports.Console());
} else {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat()
            ),
        })
    );
}

const LoggerInstance = winston.createLogger({
    level: appConfig.logs.level,
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    transports,
});

module.exports = LoggerInstance;
