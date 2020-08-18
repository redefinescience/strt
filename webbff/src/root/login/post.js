const httpStatus = require("http-status-codes");
const common = require("./common");

module.exports = (req, res) => {
  const { body, session } = req;
  if (body.crumbs !== session.crumbs) {
    delete session.crumbs;
    delete session.returnPath;
    delete session.auth;
    session.save();
    return common.returnNoAuth(req, res);
  }

  delete session.crumbs;
  session.auth = {};
  session.auth.user = {
    id: "TESTID",
    displayName: "Test Name"
  };
  session.save();
  console.log(session);
  return common.returnAuth(req, res);
};
