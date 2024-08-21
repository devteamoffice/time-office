const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");

router.post("/add", contactController.addQueries);

module.exports = router;
