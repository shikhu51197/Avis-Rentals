
const mongoose = require("mongoose");
const date = new Date().toString().split(" ");
let str = "";
for (let i = 0; i < date.length - 4; i++) {
  str += date[i] + " ";
}
const cartSchema = mongoose.Schema(
    {
        carId: Number,
        image: String,
        door: String,
        model: String,
        miles: String,
        color: String,
        bodycolor: String,
        Wheel: String,
        Engine: String,
        fuelcapacity: String,
        Transmission: String,
        Availibilty: String,
        date: String,
        Ac: String,
        seats: String,
        value: Number,
        largebag: String,
        smallbag: String,
        feature: String,
        brand: String,
        type: String,
        RegNo: String,
        PickupDate: {type:String ,default:str},
        DropDate: {type:String ,default:str},
        PickupLocation: String,
        DropLocation: String,
        location: String,
        // Quantity:{ type:Number ,default:1},
        UserId:{type:mongoose.Schema.Types.ObjectId , ref:"user"}
      },
      { versionKey: false }
    );

const cartModel = mongoose.model("cart", cartSchema);

module.exports = { cartModel };