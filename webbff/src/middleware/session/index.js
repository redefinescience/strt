const config = require("../../../config").get();

const cors = require("cors");
const session = require("express-session");
const sessionStore = require("connect-mongodb-session")(session);

const TABLE_NAME = "sessions";

const corsConfig = {
  origin: config.origin,
  credentials: true,
};

const sessionConfig = {
  secret: config.sessionSecret,
  cookie: {
    httpOnly: true,
    sameSite: "strict",
    secure: !config.local,
    maxAge: config.sessionTime,
  },
  resave: false,
  rolling: true,
  saveUninitialized: true,
  store: new sessionStore({
    uri: config.mongoURI,
    databaseName: config.mongoDBName,
    collection: TABLE_NAME,
    //  clear_interval: 24 * 60 * 60 ?
  }),
};

// Call these two consecutively
const corsmw = cors(corsConfig);
const sessionmw = session(sessionConfig);
module.exports = (req, res, next) =>
  corsmw(req, res, () => sessionmw(req, res, next));
