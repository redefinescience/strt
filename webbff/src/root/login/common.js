const httpStatus = require("http-status-codes");

module.exports.returnNoAuth = (req, res) =>
  res.status(httpStatus.UNAUTHORIZED).json({
    crumbs: req.session.crumbs,
    returnpath: req.session.returnPath
  });

module.exports.returnAuth = (req, res) =>
  res.status(httpStatus.OK).json({
    returnpath: req.session.returnpath,
    user: req.session.auth.user
  });
