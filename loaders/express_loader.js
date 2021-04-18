const cors = require("cors");
const compression = require("compression");
const express = require("express");

const appRouter = require("../api/app_router");
const appConfig = require("../config/app_config");
const errorHandler = require("../api/middlewares/error_handler");

function expressLoader(app) {
    /**
     * Application healthcheck endpoints
     */
    app.get("/status", (req, res) => {
        res.status(200).end();
    });

    app.use(compression());
    app.use(cors());
    app.use(express.json());
    app.use(appConfig.api.prefix, appRouter());

    app.use(errorHandler);
}

module.exports = expressLoader;
