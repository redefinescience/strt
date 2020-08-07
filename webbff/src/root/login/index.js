module.exports = require("express")
  .Router()
  .get("/", require("./get"))
  .post("/", require("./post"))
  .use("/provider", require("./provider"))
  .use("/testauth", require("./testauth"));
