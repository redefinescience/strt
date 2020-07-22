const config = require("./config").get();
const log4js = require("log4js");
const logger = log4js.getLogger("SERVER");
logger.level = config.loglevel;

const express = require("express");

const server = express();

// Make sure .req.strt exists
server.use((req, _res, next) => (req.strt = {} && next()));

// Attach logger to req
server.use(require("./src/middleware/logging"));

// Cors/Session setup
server.use(require("./src/middleware/session"));

// Root route
server.use("/", require("./src/root"));

server.listen(config.port, (e) =>
  e
    ? logger.fatal("server failed to start", e)
    : logger.info(`server running on ${config.port}`),
);
