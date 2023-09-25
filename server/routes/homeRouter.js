const express = require("express");
router = express.Router();

const renderHome = require("../controllers/homeController").homeController;
router.route("/").get(renderHome);
module.exports = router;
