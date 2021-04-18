const express = require("express");
const router = express.Router();
const courseService = require("../../services/course_service");

function courseRouter(appRouter) {
    appRouter.use("/courses", router);

    router.post("", async (req, res) => {
        await courseService.create(req.body);
        return res.status(201).end();
    });

    router.get("", async (req, res) => {
        let courses = await courseService.getCourses();
        return res.json(courses).status(200);
    });
}

module.exports = courseRouter;
