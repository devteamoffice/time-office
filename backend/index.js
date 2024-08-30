require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const keys = require("./config/keys");
const socket = require("./socket");
const setupDB = require("./utils/db");
const routes = require("./routes/router");

const { port } = keys;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true,
  })
);
app.use(cors());

setupDB();
// require("./config/passport")(app);
app.use(routes);

const server = app.listen(port, () => {
  console.log(
    `✓ Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
  );
});

socket(server);
