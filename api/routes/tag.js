const express = require("express");
const router = express.Router();
const tagService = require("../../services/tag_service");

function tagRouter(appRouter) {
    appRouter.use("/tags", router);

    router.post("", async (req, res) => {
        await tagService.create(req.body);
        return res.status(201).end();
    });

    router.get("", async (req, res) => {
        let tags = await tagService.getTags();
        return res.json(tags).status(200);
    });
}

module.exports = tagRouter;
