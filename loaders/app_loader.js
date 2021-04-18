const perfLogger = require("./perf_logger");
const expressLoader = require("./express_loader");

function appLoader(app) {
    perfLogger(app);
    expressLoader(app);
}

module.exports = appLoader;
