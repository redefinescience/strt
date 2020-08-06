const httpStatus = require("http-status-codes");
const cryptoRandomString = require("crypto-random-string");

module.exports.returnNoAuth = (req, res) => {
  req.session.returnPath = req.query.returnpath;
  req.session.crumbs = cryptoRandomString({
    length: 128,
    type: "url-safe",
  });
  req.session.save();
  return res.status(401).json({
    crumbs: req.session.crumbs,
    returnpath: req.session.returnPath,
  });
};

module.exports.returnAuth = (req, res) => res.sendStatus(200);
