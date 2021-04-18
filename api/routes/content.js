const express = require("express");
const router = express.Router();
const contentService = require("../../services/content_service");

function contentRouter(appRouter) {
    appRouter.use("/content", router);

    router.post("", async (req, res) => {
        await contentService.create(req.body);
        return res.status(201).end();
    });

    router.get("", async (req, res) => {
        let content = await contentService.getContent(req.query.title);
        return res.json(content).status(200);
    });
}

module.exports = contentRouter;
