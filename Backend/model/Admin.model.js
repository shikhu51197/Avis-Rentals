const mongoose = require("mongoose");

const adminschema = mongoose.Schema(
  {
    
    name: String,
    image:String,
    Mobile: Number,
    email: String,
    password: String,
   
  },
  { versionKey: false }
);

const AdminModel = mongoose.model("admin", adminschema);

module.exports = { AdminModel };
