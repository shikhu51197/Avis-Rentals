const { Router } = require("express");
const { Authenticate } = require("../middleware/Authenticate");
const { CartModel } = require("../model/cartModel");


const cartRouter = Router();

cartRouter.get("/",Authenticate, async (req, res) => {
  const userID = req.body.userID;
  try {
    const data = await CartModel.find({ userID: userID });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

cartRouter.post("/add",Authenticate, async (req, res) => {
  try {
    const data = new CartModel(req.body);
    await data.save();
    res.send("data is added");
  } catch (error) {
    res.send(error);
  }
});

//delete

cartRouter.delete("/delete/:id",Authenticate, async (req, res) => {
    const id = req.params.id;
  
    try {
      await CartModel.findByIdAndDelete({ _id: id });
      res.send("product Removed");
    } catch (error) {
      res.send({ msg: "something went wrong", error: error.message });
    }
  });


module.exports = { cartRouter };