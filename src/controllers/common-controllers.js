const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const requireSignIn = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token)
  if (!token) return res.status(400).json({ error: "Signin required" });
  try {
    const decoded = await jwt.verify(token, JWT_SECRET);
    if (decoded) {
      req.username = decoded.username;
    }
    next();
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = { requireSignIn };
