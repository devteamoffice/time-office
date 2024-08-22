const router = require("express");
const apiRoutes = require("./indexRouter");
const keys = require("../config/keys");
const api = `/${apiRoutes}`;
const { apiURL } = keys.app;
router.use(api, apiURL);
router.use(api, (req, res) => res.status(404).json("No API route found."));

module.exports = router;
