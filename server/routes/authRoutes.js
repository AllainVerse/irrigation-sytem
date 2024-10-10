const express = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  dashboard,
} = require("../controllers/authController");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
