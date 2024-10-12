const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const plotRoutes = require("./routes/plotRoutes");
const plantRoutes = require("./routes/plantRoutes");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", authRoutes);
app.use("/plots", plotRoutes);
app.use("/plots", plantRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
