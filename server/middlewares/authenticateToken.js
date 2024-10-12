const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { TokenBlacklist } = require("../models");
const SECRET_KEY = "s3cr3tK3y!@#$%^&*()_+VERY_SECRET";

// Promisify jwt.verify to use async/await
const verifyToken = promisify(jwt.verify);

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1]; // Optional chaining to safely get token
    if (!token) {
      return res.status(401).json({ message: "Access denied!" });
    }

    // Run blacklist check and token verification in parallel
    const [blacklistedToken, decoded] = await Promise.all([
      TokenBlacklist.findOne({ where: { token } }),
      verifyToken(token, SECRET_KEY),
    ]);

    if (blacklistedToken) {
      return res.status(401).json({
        message: "Token has been blacklisted. Please login again.",
      });
    }

    // Set user info from decoded token
    req.user = { id: decoded.id, email: decoded.email, role: decoded.role };
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = authenticateToken;
