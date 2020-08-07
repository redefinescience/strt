const config = require("./config").get();
const log4js = require("log4js");
const logger = log4js.getLogger("SERVER");
logger.level = config.loglevel;

const express = require("express");

const app = express();

// Attach logger to req
app.use(require("./src/middleware/logging"));

// Cors/Session setup
app.use(require("./src/middleware/session"));

// Root route
app.use("/", express.json(), require("./src/root"));

// TODO: BASED ON CLI ARG
const server =
  String(process.env.HTTPS).toLowerCase() === "true"
    ? require("./devhttps")(app)
    : app;

server.listen(config.port, (e) =>
  e
    ? logger.fatal("server failed to start", e)
    : logger.info(`server running on ${config.port}`)
);
