const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://shikha:meghasing@cluster0.tsfyez7.mongodb.net/cruiserantal?retryWrites=true&w=majority"
);

module.exports = { connection };
