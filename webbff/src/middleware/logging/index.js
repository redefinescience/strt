const config = require("../../../config").get();
const log4js = require("log4js");
const uuid = require("uuid");

/**
 * Generates a transaction id and a logger
 * assigning them to req.strt.
 *
 * Executes a log4js express logging middleware instance with
 * the newly created logger.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
  const transId = uuid.v4();
  const logger = log4js.getLogger(transId);
  logger.level = config.loglevel;

  req.strt = {
    ...req.strt,
    ...{
      transId,
      logger,
    },
  };

  return log4js.connectLogger(req.strt.logger, {
    level: log4js.levels.INFO,
    nolog: "\\.ico",
  })(req, res, next);
};
