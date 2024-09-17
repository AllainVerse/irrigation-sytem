const { all } = require("express/lib/application");
const { User } = require("../models");

const checkRole = async (allowedRoles) => {
  return async (req, res, next) => {
    const userId = req.userId;
    const user = await User.findByPk(userId);

    if (allowedRoles.includes(user.role)) {
      next();
    } else {
      res.status(403).json({ message: "Access denied!" });
    }
  };
};

module.exports = checkRole;
