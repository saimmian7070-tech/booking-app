const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "No token, access denied" });
  }

  try {
    const token = header.split(" ")[1];

    const verified = jwt.verify(token, "secretkey");

    req.user = verified;
    next();

  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = auth;