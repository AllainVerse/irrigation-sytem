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
    tableName: "users",
    timestamps: false, // Disable createdAt and updatedAt
  }
);

// Model untuk tabel plot
const Plot = sequelize.define(
  "plot",
  {
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
  },
  {
    tableName: "plots",
    timestamps: false, // Disable createdAt and updatedAt
  }
);

const Device = sequelize.define(
  "Device",
  {
    device_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // Nama tabel yang dirujuk
        key: "user_id",
      },
      onDelete: "CASCADE",
    },
    plot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "plots", // Nama tabel yang dirujuk
        key: "plot_id",
      },
      onDelete: "CASCADE",
    },
    device_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "devices",
    timestamps: false,
  }
);

// Model untuk tabel sensor_data
const SensorData = sequelize.define(
  "SensorData",
  {
    data_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    plot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "plots", // Nama tabel yang dirujuk
        key: "plot_id",
      },
      onDelete: "CASCADE",
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    nitrogen: {
      type: DataTypes.INTEGER,
    },
    phosphorus: {
      type: DataTypes.INTEGER,
    },
    potassium: {
      type: DataTypes.INTEGER,
    },
    temperature: {
      type: DataTypes.DECIMAL(5, 2),
    },
    humidity: {
      type: DataTypes.DECIMAL(5, 2),
    },
    ph: {
      type: DataTypes.DECIMAL(5, 2),
    },
    rainfall: {
      type: DataTypes.DECIMAL(10, 2),
    },
    label: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "sensor_data",
    timestamps: false,
  }
);

// Define relationships (associations)
User.hasMany(Plot, { foreignKey: "user_id", onDelete: "CASCADE" });
Plot.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Device, { foreignKey: "user_id", onDelete: "CASCADE" });
Device.belongsTo(User, { foreignKey: "user_id" });

Plot.hasMany(Device, { foreignKey: "plot_id", onDelete: "CASCADE" });
Device.belongsTo(Plot, { foreignKey: "plot_id" });

Plot.hasMany(SensorData, { foreignKey: "plot_id", onDelete: "CASCADE" });
SensorData.belongsTo(Plot, { foreignKey: "plot_id" });

// Sinkronasi model dengan database
sequelize.sync();

module.exports = { sequelize, User, Plot, Device, SensorData };
