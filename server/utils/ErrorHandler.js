const { createLogger, format, transports } = require("winston");

const {
  combine, timestamp, label, prettyPrint,
} = format;

module.exports = function handleError(err, req, res) {
  const logger = createLogger({
    format: combine(
      label({ label: "Internal error🖖" }),
      timestamp(),
      prettyPrint(),
    ),
    level: "error",
    transports: [new transports.Console()],
  });

  logger.log({
    level: "error",
    message: `☠ ${err.message} 🌶`,
  });

  const error = {
    status: err.status || 500,
    msg: err.message,
  };
  res.send(error);
};
