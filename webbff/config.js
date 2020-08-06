const defaultConfig = {
  loglevel: "info",
  local: false,
  port: process.env.PORT || 5000,
  origin: "",
  sessionSecret: "THIS NEEDS TO CHANGE",
  sessionTime: 24 * 60 * 60 * 1000,
  mongoDBName: "strt",
  mongoURI: "",
};

const local = {
  loglevel: "debug",
  local: true,
  origin: "https://localhost:3000",
  mongoURI: "mongodb://localhost:27017",
};

module.exports.get = () => ({
  ...defaultConfig,
  ...local,
});
