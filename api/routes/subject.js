const express = require("express");
const router = express.Router();
const subjectService = require("../../services/subject_service");

function subjectRouter(appRouter) {
    appRouter.use("/subjects", router);

    router.post("", async (req, res) => {
        await subjectService.create(req.body);
        return res.status(201).end();
    });

    router.get("", async (req, res) => {
        let subjects = await subjectService.getSubjects();
        return res.json(subjects).status(200);
    });
}

module.exports = subjectRouter;
