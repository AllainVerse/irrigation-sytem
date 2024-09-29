const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const plotRoutes = require("./routes/plotRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cors());

app.use("/", authRoutes);
app.use("/plots", plotRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
