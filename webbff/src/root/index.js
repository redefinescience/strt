module.exports = require("express")
  .Router()
  .use("/login", require("./login"))
  .use("/ping", require("./ping"));
