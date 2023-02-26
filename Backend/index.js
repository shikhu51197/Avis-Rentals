const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.routes");
const { adminRouter } = require("./routes/Admin.routes");
const { carRouter } = require("./routes/Car.routes");
const { Authenticate } = require("./middleware/Authenticate");
const { cartRouter } = require("./routes/Cart.routes");

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  console.log("Welcome to HomePage");
  res.send("Homepage");
});

app.use("/admin", adminRouter);
app.use("/users", userRouter);
app.use("/cars", carRouter);
app.use(Authenticate);
app.use("/cart", cartRouter);

app.listen(process.env.port, async (req, res) => {
  try {
    await connection;
    console.log("connected to database");
  } catch (err) {
    console.log("error connecting to database");
  }

  console.log(`listening on ${process.env.port}`);
});
