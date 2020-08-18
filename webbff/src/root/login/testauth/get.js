const cryptoRandomString = require("crypto-random-string");

module.exports = (req, res) =>
  res.redirect(
    "http://localhost:3000/login?key=thisisakeyhorray&crumbs=" +
      (req.session.crumbs = cryptoRandomString({
        length: 128,
        type: "url-safe"
      }))
  );
