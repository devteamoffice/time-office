const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");

router.post("/add", contactController.addQueries);
router.get("/queries", contactController.allQueries);
router.get("/queries/:id", contactController.queryById);
router.delete("/queries/:id", contactController.deleteQuery);
module.exports = router;
