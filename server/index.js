const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");
require("./db");
const { handleError } = require("./utils/ErrorHandler");

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(routes);
// Error-middleware
server.use((err, req, res) => {
  handleError(err, res);
});

server.listen(8000, () => {
  console.log("Server is running on PORT 8000");
});
