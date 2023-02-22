const express = require("express");
const { AdminModel } = require("../model/admin.model");
const bcrypt = require("bcrypt");
const adminRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

adminRouter.post("/register", async (req, res) => {
  const { name, email, password, Mobile, image} = req.body;
 
    if (data.length > 0) {
      res.send({ "msg": "admin already exist" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        try {
          if (err) {
            res.send({ "msg": "something went wrong" });
          } else {
            const admin = new AdminModel({
              name,
              email,
              password: hash,
              image,
              Mobile,
             
            });
            await admin.save();
            console.log("admin registered successfully");
            res.send({ "msg": "admin Registered successfully" });
          }
        } catch (error) {
          res.send({ "msg": "something went wrong", "error": error.message });
        }
      });
    
  }
});







adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
    const admin = await AdminModel.find({ email:email });

    if (admin.length > 0) {
      bcrypt.compare(password, admin[0].password, (err, result) => {
        if (result) {
        res.send({ "msg": "admin logged in", token: "1234"});
      } else {
        res.status(404).send({ "msg": "invalid credentials" });
      }
    });
  } else {
    res.send({ "msg": "admin not found" });
  }
});
module.exports = { adminRouter };
