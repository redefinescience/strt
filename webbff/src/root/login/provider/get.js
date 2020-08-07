const providers = require("./providers");

module.exports = (_req, res) =>
  res.json(
    providers.map((v) => ({ name: v.name, displayName: v.displayName }))
  );
