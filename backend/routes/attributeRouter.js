// routes/attributes.js
const express = require("express");
const router = express.Router();
const attributesController = require("../controllers/attributesController");

// CRUD for Attributes
router.post("/", attributesController.createAttribute);
router.get("/", attributesController.getAttributes);
router.put("/:id", attributesController.updateAttribute);
router.delete("/:id", attributesController.deleteAttribute);

// CRUD for Attribute Values
router.post("/values", attributesController.createAttributeValue);
router.get(
  "/values/:entityType/:entityId",
  attributesController.getAttributeValuesByEntity
);
router.put("/values/:id", attributesController.updateAttributeValue);
router.delete("/values/:id", attributesController.deleteAttributeValue);

module.exports = router;
