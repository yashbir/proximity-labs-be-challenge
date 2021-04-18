const dbHelper = require("../database/db_helper");

const contentService = {};
const CONTENT_COLLECTION = "content";

contentService.create = async (contentData) => {
    dbHelper.insert(CONTENT_COLLECTION, contentData);
};

contentService.getContent = async (title) => {
    return dbHelper.get(CONTENT_COLLECTION, { title: title });
};

module.exports = contentService;
