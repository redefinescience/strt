module.exports = require("express")
  .Router()
  .get("/", require("./get"))
  .use("/testauth", require("./testauth"));
