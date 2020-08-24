const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token) {
    return res.status(401).json({
      msg: "No token. Authorization denied.",
    });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid." });
  }

  // Continue moving through the middleware stack
  next();
};
