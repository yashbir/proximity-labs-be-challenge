const FileSync = require("lowdb/adapters/FileSync");
const low = require("lowdb");

// Initialize db instance for querying
// Using FileAsync to avoid blocking requests
const dbAdapter = new FileSync("database/db.json");
const db = low(dbAdapter);

const dbHelper = {};

dbHelper.insert = (collection, jsonData) => {
    db.get(collection).push(jsonData).write();
};

dbHelper.get = (collection, jsonCondition = {}) => {
    return db.get(collection).filter(jsonCondition).value();
};

dbHelper.update = (collection, jsonCondition, jsonData) => {
    db.get(collection).find(jsonCondition).assign(jsonData).write();
};

dbHelper.delete = (collection, jsonCondition) => {
    db.get(collection).remove(jsonCondition).write();
};

module.exports = dbHelper;
