const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.routes");
const { adminRouter } = require("./routes/Admin.routes");
const { carRouter } = require("./routes/Car.routes");
const { cartRouter } = require("./routes/Cart.routes");
// const { OrderRouter } = require("./Routes/Order.routes")
const cors = require("cors");
// const {Authenticate} = require("./middleware/Authenticate")

app.use(cors());


app.get("/", (req, res) => {
  console.log("Welcome to HomePage");
  res.send("Homepage");
});
app.use("/admin", adminRouter);
app.use("/users", userRouter);

// app.use(Authenticate)
app.use("/cars",carRouter);
app.use("/cart" , cartRouter);
// app.use("/order" , OrderRouter);


app.listen(process.env.port, async (req, res) => {
  try {
    await connection;
    console.log("connected to database");
  } catch (err) {
    console.log("error connecting to database");
  }

  console.log(`listening on ${process.env.port}`);
});