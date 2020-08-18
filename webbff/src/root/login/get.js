const common = require("./common");

module.exports = (req, res) => {
  req.session.returnPath = req.query.returnpath;
  if (req.session.auth) {
    return common.returnAuth(req, res);
  }
  return common.returnNoAuth(req, res);
};
