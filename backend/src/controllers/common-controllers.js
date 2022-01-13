const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const requireSignIn = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(400).json({ error: "Signin required" });
  // jwt.verify(token, JWT_SECRET, (err, decoded) => {
  //   if (err) return res.status(400).json({ error: "Invalid token" });
  //   if (decoded) {
  //     req.body.userId = decoded.userId;
  //     next();
  //   }
  // });
  try {
    const decoded = await jwt.verify(token, JWT_SECRET);
    if (decoded) {
      res.body.userId = decoded.userId;
    }
    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = { requireSignIn };
