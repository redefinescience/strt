module.exports = (req, res) =>
  res.redirect(
    "http://localhost:3000/login?key=thisisakeyhorray&crumbs=" +
      req.query.crumbs,
  );
