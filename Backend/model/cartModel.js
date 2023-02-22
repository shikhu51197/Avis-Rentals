
const mongoose = require("mongoose");

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
        PickupDate: String,
        DropDate: String,
        PickupLocation: String,
        DropLocation: String,
        UserId: String,
        location: String,
      },
      { versionKey: false }
    );

const cartModel = mongoose.model("cart", cartSchema);

module.exports = { cartModel };