module.exports = (req, res) =>
  res.redirect(
    "https://localhost:3000/login?key=thisisakeyhorray&crumbs=" +
      req.query.crumbs,
  );
