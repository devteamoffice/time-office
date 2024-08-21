const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("../../middleware/auth");
const role = require("../../middleware/role");
const { ROLES } = require("../constants");

const categoryController = require("../controller/categoryController");

router.post(
  "/add",
  auth,
  role.check(ROLES.Admin),
  categoryController.addCategory
);
router.get("/list", categoryController.fetchStoreCategories);
router.get("/", categoryController.fetchCategories);
router.get("/:id", categoryController.fetchCategoryById);
router.put(
  "/:id",
  auth,
  role.check(ROLES.Admin),
  categoryController.updateCategory
);
router.put(
  "/:id/active",
  auth,
  role.check(ROLES.Admin),
  categoryController.updateCategoryActive
);
router.delete(
  "/delete/:id",
  auth,
  role.check(ROLES.Admin),
  categoryController.deleteCategory
);

module.exports = router;
