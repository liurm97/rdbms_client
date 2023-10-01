const express = require("express");
router = express.Router();
const databaseController = require("../controllers/databaseController");

// Root route
const renderDatabase =
  require("../controllers/databaseController").renderDatabase;
router.route("/").get(renderDatabase);

// CREATE database
const createDatabase = databaseController.createDatabase;
router.route("/create").post(createDatabase);

// // DROP TABLE
const deleteDatabase = databaseController.deleteDatabase;
router.route("/delete").post(deleteDatabase);

// // SELECT queries
// router.route("/data").post(selectTable);

module.exports = router;
