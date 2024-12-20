const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const plotRoutes = require("./routes/plotRoutes");
const dataRoutes = require("./routes/dataRoutes");
const deviceRoutes = require("./routes/deviceRoutes");
const plantRoutes = require("./routes/plantRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const cronRoutes = require("./routes/cronRoutes");
const cors = require("cors");

require("dotenv").config();
const db = require("./models"); // Pastikan ini merujuk pada folder models tempat sequelize instance berada

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", authRoutes);
app.use("/plots", plotRoutes);
app.use("/plots", dataRoutes);
app.use("/plots", deviceRoutes);
app.use("/plots", plantRoutes);
app.use("/plots", scheduleRoutes);
app.use("/irrigation-log", cronRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
