const expressWinston = require("express-winston");
const winston = require("winston");

function perfLogger(app) {
    const perfLogger = expressWinston.logger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
        ),
        msg: "HTTP {{req.method}} {{req.url}}",
        expressFormat: true,
        colorize: true,
        ignoreRoute: function (req, res) {
            return false;
        },
    });

    app.use(perfLogger);
}

module.exports = perfLogger;
