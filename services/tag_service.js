const dbHelper = require("../database/db_helper");

const tagService = {};
const TAG_COLLECTION = "tags";

tagService.create = async (tagData) => {
    dbHelper.insert(TAG_COLLECTION, tagData);
};

tagService.getTags = async () => {
    return dbHelper.get(TAG_COLLECTION);
};

module.exports = tagService;
