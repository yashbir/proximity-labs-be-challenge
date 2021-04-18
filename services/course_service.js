const dbHelper = require("../database/db_helper");

const courseService = {};
const COURSE_COLLECTION = "courses";

courseService.create = async (courseData) => {
    dbHelper.insert(COURSE_COLLECTION, courseData);
};

courseService.getCourses = async () => {
    return dbHelper.get(COURSE_COLLECTION);
};

module.exports = courseService;
