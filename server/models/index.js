const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("irrigation_system", "postgres", "admin123", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

// Model untuk tabel users
const User = sequelize.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("farmer", "admin"),
      allowNull: false,
      defaultValue: "farmer",
    },
    // Kolom untuk token reset password
    resetPasswordToken: {
      type: DataTypes.STRING(255),
      allowNull: true, // Bisa null jika tidak ada token reset yang aktif
    },
    resetPasswordExpires: {
      type: DataTypes.DATE, // Tipe tanggal untuk menyimpan waktu kedaluwarsa token
      allowNull: true,
    },
  },
  {
    timestamps: false, // Disable createdAt and updatedAt
  }
);

// Model untuk tabel plot
const Plot = sequelize.define("plot", {
  plot_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  plot_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  area: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "user_id",
    },
    onDelete: "CASCADE",
  },
});

// Hubungan antara User dan Plot
User.hasMany(Plot, { foreignKey: "user_id" });
Plot.belongsTo(User, { foreignKey: "user_id" });

// Sinkronasi model dengan database
sequelize.sync();

module.exports = { sequelize, User, Plot };
