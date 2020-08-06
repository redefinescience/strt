module.exports = require("express")
  .Router()
  .use("/testauth", require("./testauth"));
