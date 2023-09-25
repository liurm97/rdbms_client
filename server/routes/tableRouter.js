const express = require("express");
router = express.Router();
const tableController = require("../controllers/tableController");

const renderTable = require("../controllers/tableController").renderTable;
router.route("/").get(renderTable);

// CREATE TABLE

// try {
const createTableForm = tableController.createTableForm;
const createTableApi = tableController.createTableAPI;
router.route("/create").post(createTableForm).get(createTableApi);
// } catch (err) {
// console.log("Error");
// }

// UPDATE TABLE SET ...
// router.route("/update").post(updateTable);

// // DROP TABLE
// router.route("/delete").post(dropTable);

// // SELECT queries
// router.route("/data").post(selectTable);

module.exports = router;
