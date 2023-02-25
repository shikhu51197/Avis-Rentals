const express = require("express");
// const { Authenticate } = require("../middleware/Authenticate");
const { cartModel } = require("../model/cartModel");
const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  const userID = req.body.userId;
  try {
    const data = await cartModel.find({ userId: userID });
    res.send(data);
  } catch (error) {
    res.send(error);
}
});

cartRouter.post("/add", async (req, res) => {
  try {
      const data = new cartModel(req.body);
      await data.save();
      res.send("data is added");
    } catch (error) {
      res.send(error);
    }
});



//delete

cartRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
  
    try {
      await cartModel.findByIdAndDelete({ _id: id });
      res.send("product Removed");
    } catch (error) {
      res.send({ msg: "something went wrong", error: error.message });
    }
  });


module.exports = { cartRouter };