const jwt = require("jsonwebtoken");
const SECRET_KEY = "s3cr3tK3y!@#$%^&*()_+VERY_SECRET";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied!" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    // Gunakan 'decoded' sebagai nama parameter
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = { id: decoded.id, email: decoded.email, role: decoded.role }; // Ambil id, email, dan role dari 'decoded'
    next();
  });
};

module.exports = authenticateToken;
