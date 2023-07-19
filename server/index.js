// /Express
const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { userRoute } = require("./routes/userRoute");
const { oemRoute } = require("./routes/oem-route");
const { invertoryRoute } = require("./routes/inventory-route");
// App
const app = express();
app.use(express.json());

// Cors

app.use(cors());

// require dotenv
require("dotenv").config();

app.use("/", userRoute);
app.use("/oem", oemRoute);
app.use("/inventory", invertoryRoute);
// Listen Our App
app.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server is running on ${process.env.PORT}`);
});
