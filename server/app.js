const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const plotRoutes = require("./routes/plotRoutes");
const { authenticateToken } = require("./middlewares/authenticateToken");

const app = express();
app.use(bodyParser.json());

app.use("/", authRoutes);
app.use("/plots", plotRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
