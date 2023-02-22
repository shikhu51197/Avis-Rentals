// const mongoose = require("mongoose");
// const date = new Date().toString().split(" ");
// let str = "";
// for (let i = 0; i < date.length - 4; i++) {
//   str += date[i] + " ";
// }

// const OrderSchema = mongoose.Schema(
//   {
//     address: { type: String },
//     city: { type: String },
//     pincode: { type: Number },
//     totalPrice: { type: Number },
//     car: [],
//     userID: { type: mongoose.Schema.ObjectId, ref: "user" },
//     time: { type: String, default: str },
//     status: { type: String },
//   },
//   { versionKey: false }
// );

// const OrderModel = mongoose.model("Order", OrderSchema);

// module.exports = { OrderModel };
