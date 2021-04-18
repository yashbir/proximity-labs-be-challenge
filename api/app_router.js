const express = require("express");
const tagRouter = require("./routes/tag");
const subjectRouter = require("./routes/subject");
const courseRouter = require("./routes/course");
const contentRouter = require("./routes/content");

function appRouter() {
    const router = express.Router();
    tagRouter(router);
    subjectRouter(router);
    courseRouter(router);
    contentRouter(router);
    return router;
}

module.exports = appRouter;
