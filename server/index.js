const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes");
require("./db");

const handleError = require("./utils/ErrorHandler");

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(morgan("combined", { stream: handleError.stream }));

server.use(routes);

// Error-middleware
server.use((err, req, res, next) => {
  handleError(err, req, res);
  next();
});

server.listen(8000, () => {
  console.log(`Server is lisiting on PORT 8000`);
});
