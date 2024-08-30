const router = require("express").Router();
const apiRoutes = require("./indexRouter");
const keys = require("../config/keys");

const { apiURL } = keys.app;

// Use the apiRoutes middleware under the API URL path
router.use(apiURL, apiRoutes);

// 404 Handler for API routes
router.use(apiURL, (req, res) =>
  res.status(404).json({ error: "No API route found." })
);

module.exports = router;
