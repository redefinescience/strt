module.exports = require("express")
  .Router()
  .use("/:name", require("./{name}"))
  .get("/", require("./get"));
