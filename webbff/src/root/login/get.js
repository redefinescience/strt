const httpStatus = require("http-status-codes");
const common = require("./common");

module.exports = (req, res) =>
  req.session.auth
    ? common.returnAuth(req, res)
    : common.returnNoAuth(req, res);
