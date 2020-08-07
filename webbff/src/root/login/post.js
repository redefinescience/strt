const httpStatus = require("http-status-codes");
const common = require("./common");

module.exports = (req, res) => {
  const { body, session } = req;

  console.log(body);
  console.log(session);
  if (body.crumbs !== session.crumbs) {
    return common.returnNoAuth(req, res);
  }

  session.crumbs = undefined;
  session.auth = {};
  session.auth.user = {
    id: "TESTID",
    displayName: "Test Name"
  };
  session.save();

  return common.returnAuth(session, res);
};
