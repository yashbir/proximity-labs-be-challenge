const dbHelper = require("../database/db_helper");

const subjectService = {};
const SUBJECT_COLLECTION = "subjects";

subjectService.create = async (subjectData) => {
    dbHelper.insert(SUBJECT_COLLECTION, subjectData);
};

subjectService.getSubjects = async () => {
    return dbHelper.get(SUBJECT_COLLECTION);
};

module.exports = subjectService;
