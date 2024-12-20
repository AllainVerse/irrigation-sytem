const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.js")[
  process.env.NODE_ENV || "development"
];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: false,
  }
);

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

// Model untuk tabel token_blacklist
const TokenBlacklist = sequelize.define(
  "TokenBlacklist",
  {
    token: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    blacklistedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "token_blacklist",
    timestamps: false,
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

// Model untuk tabel plant_needs
const PlantNeeds = sequelize.define(
  "PlantNeeds",
  {
    crop_id: {
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
    crop_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    optimal_moisture: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    water_requirement: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "plant_needs",
    timestamps: false,
  }
);

// Model untuk Irrigation Schedule
const Schedule = sequelize.define(
  "Schedule",
  {
    schedule_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    plot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "plots",
        key: "plot_id",
      },
      onDelete: "CASCADE",
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    frequency: {
      type: DataTypes.ENUM("daily", "weekly", "monthly"),
      allowNull: false,
      defaultValue: "daily",
    },
  },
  {
    tableName: "irrigation_schedule",
    timestamps: false,
  }
);

const IrrigationLog = sequelize.define(
  "irrigationLog",
  {
    log_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "irrigation_schedule",
        key: "schedule_id",
      },
      onDelete: "CASCADE",
    },
    plot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "plots",
        key: "plot_id",
      },
      onDelete: "CASCADE",
    },
    log_date: {
      type: DataTypes.DATEONLY, // Store only the date (YYYY-MM-DD)
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    water_used: {
      type: DataTypes.FLOAT, // Menggunakan float untuk liter air
      allowNull: false,
      defaultValue: 0, // Default 0, akan dihitung kemudian
    },
  },
  {
    tableName: "irrigation_log",
    timestamps: false,
  }
);

// Define relationships (associations)
User.hasMany(Plot, { foreignKey: "user_id", onDelete: "CASCADE" });
Plot.belongsTo(User, { foreignKey: "user_id" });

Plot.hasMany(Device, { foreignKey: "plot_id", onDelete: "CASCADE" });
Device.belongsTo(Plot, { foreignKey: "plot_id" });

Plot.hasMany(SensorData, { foreignKey: "plot_id", onDelete: "CASCADE" });
SensorData.belongsTo(Plot, { foreignKey: "plot_id" });

Plot.hasOne(PlantNeeds, { foreignKey: "plot_id", onDelete: "CASCADE" });
PlantNeeds.belongsTo(Plot, { foreignKey: "plot_id" });

Plot.hasMany(Schedule, { foreignKey: "plot_id", onDelete: "CASCADE" });
Schedule.belongsTo(Plot, { foreignKey: "plot_id" });

Schedule.hasMany(IrrigationLog, {
  foreignKey: "schedule_id",
  onDelete: "CASCADE",
});
IrrigationLog.belongsTo(Schedule, { foreignKey: "schedule_id" });

Plot.hasMany(IrrigationLog, { foreignKey: "plot_id", onDelete: "CASCADE" });
IrrigationLog.belongsTo(Plot, { foreignKey: "plot_id" });

// Sinkronasi model dengan database
sequelize.sync();

module.exports = {
  sequelize,
  User,
  TokenBlacklist,
  Plot,
  Device,
  SensorData,
  PlantNeeds,
  Schedule,
  IrrigationLog,
};
