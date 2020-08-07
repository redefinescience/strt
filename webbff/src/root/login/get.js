const cryptoRandomString = require("crypto-random-string");

const common = require("./common");

module.exports = (req, res) => {
  req.session.returnPath = req.query.returnpath;
  if (req.session.auth) {
    return common.returnAuth(req, res);
  }

  req.session.crumbs = cryptoRandomString({
    length: 128,
    type: "url-safe",
  });
  req.session.save();
  return common.returnNoAuth(req, res);
};
