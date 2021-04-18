/** Application Entry Point **/
const express = require("express");
const appConfig = require("./config/app_config");
const Logger = require("./loaders/logger");
const appLoader = require("./loaders/app_loader");

async function startServer() {
    const app = express();
    appLoader(app);
    app.listen(appConfig.port, () => {
        Logger.info(`
        ################################################ 
                PxLabs is up on port: ${appConfig.port}
        ################################################`);
    }).on("error", (err) => {
        Logger.error(err);
        process.exit(1);
    });
}

startServer();
