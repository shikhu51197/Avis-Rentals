const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

userRouter.post("/register", async (req, res) => {
  const { name, email, password,confirmPass, country, Mobile, Address, Zip } = req.body;
  const data = await UserModel.find({
    $or: [{ email:email}, { Mobile:Mobile}],
  });

  if (password !== confirmPass) {
    res.send({ "msg": "password must be same" });
  } else {
    if (data.length > 0) {
      res.send({ "msg": "user already exist" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        try {
          if (err) {
            res.send({ "msg": "something went wrong" });
          } else {
            const user = new UserModel({
              name,
              email,
              password: hash,
              confirmPass: hash,
              country,
              Mobile,
              Address,
              Zip,
            });
            await user.save();
            console.log("User registered successfully");
            res.send({ "msg": "user Registered successfully" });
          }
        } catch (error) {
          res.send({ "msg": "something went wrong", "error": error.message });
        }
      });
    }
  }
});







userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
    const user = await UserModel.find({ email:email });

    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, process.env.secret_key);
        res.send({ "msg": "user logged in", token: token });
      } else {
        res.status(404).send({ "msg": "invalid credentials" });
      }
    });
  } else {
    res.send({ "msg": "user not found" });
  }
});
module.exports = { userRouter };
