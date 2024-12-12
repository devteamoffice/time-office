// routes/RoleRoutes.js
const express = require("express");
const {
  assignRole,
  getRoles,
  deleteRole,
} = require("../controller/rolesController");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/assign", auth, assignRole);
router.get("/", auth, getRoles);
router.delete("/:roleId", auth, deleteRole);

module.exports = router;
