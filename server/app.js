const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const plotRoutes = require("./routes/plotRoutes");
const plantneedsRoutes = require("./routes/plantneedsRoutes");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", authRoutes);
app.use("/plots", plotRoutes);
app.use("/plots", plantneedsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
