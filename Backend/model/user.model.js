const mongoose = require("mongoose");

const userschema = mongoose.Schema(
  {
    country: String,
    name: String,
    Mobile: Number,
    email: String,
    password: String,
    confirmPass:String,
    Address :String,
    Zip: Number,
    NumberOfOrders:Number
  },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userschema);

module.exports = { UserModel };
