const config = require("../../../config").get();
const log4js = require("log4js");
const uuid = require("uuid");

/**
 * Generates a transaction id and a logger
 * assigning them to req.
 *
 * Executes a log4js express logging middleware instance with
 * the newly created logger.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
  req.transactionId = uuid.v4();
  req.logger = log4js.getLogger(req.transactionId);
  req.logger.level = config.loglevel;

  return log4js.connectLogger(req.logger, {
    level: log4js.levels.INFO,
    nolog: "\\.ico",
  })(req, res, next);
};
