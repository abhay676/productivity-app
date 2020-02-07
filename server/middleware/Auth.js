const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("../utils/ErrorHandler");

module.exports = async function(req, res, next) {
  const bearerHeader =
    req.headers["x-access-token"] || req.headers.authorization;
  if (!bearerHeader) {
    next(new ErrorHandler(403, "Not registered"));
  }
  const token = bearerHeader.replace("Bearer ", "");
  const verify = await jwt.verify(token, process.env.JWT_SECRET);
  req.user = verify;
  next();
};
