const httpStatus = require("http-status-codes");

module.exports = (_req, res) => res.sendStatus(httpStatus.OK);
