const express = require("express");
const { CarModel } = require("../model/car.model");
const carRouter = express.Router();

carRouter.get("/", async (req, res) => {
  const cars = await CarModel.find();
  res.send(cars);
});

carRouter.get("/:id", async (req, res) => {
  let id = req.params.id;
  id.toString();
  const cars = await CarModel.find({ _id: id });
  res.send(cars);
});

carRouter.post("/addcar", async (req, res) => {
  const {
    carId,
    image,
    door,
    model,
    miles,
    color,
    bodycolor,
    Wheel,
    Engine,
    fuelcapacity,
    Transmission,
    Availibilty,
    date,
    Ac,
    seats,
    value,
    largebag,
    smallbag,
    feature,
    brand,
    type,
    RegNo,
    PickupDate,
    DropDate,
    PickupLocation,
    DropLocation,
    UserId,
    location,
  } = req.body;
  try {
    const cars = new CarModel({
      carId,
      image,
      door,
      model,
      miles,
      color,
      bodycolor,
      Wheel,
      Engine,
      fuelcapacity,
      Transmission,
      Availibilty,
      date,
      Ac,
      seats,
      value,
      largebag,
      smallbag,
      feature,
      brand,
      type,
      RegNo,
      PickupDate,
      DropDate,
      PickupLocation,
      DropLocation,
      UserId,
      location,
    });
    await cars.save();
    res.send({ msg: "data posted" });
    console.log("Data added successfully");
  } catch (err) {
    res.send({ msg: "Error to add cars", err: err.message });
  }
});

carRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;

  await CarModel.findByIdAndUpdate({ _id: id }, req.body);
  res.send(`your ${id} has been updated`);
});

carRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await CarModel.findByIdAndDelete({ _id: id });
  res.send(`your ${id} has been deleted`);
});

carRouter.get("/", async (req, res) => {
  const door = req.query;
  const Ac = req.query;
  const bodycolor = req.query;
  const seats = req.query;

  const { value, sort, limit, page } = req.query;

  try {
    if (value > 0) {
      const data = await CarModel.find({ value: { $lte: value } }).sort({
        value: sort == "asc" ? 1 : -1,
      });
      res.send(data);
    } else {
      const data = await CarModel.find({
        $or: [
          door,
          Ac,
          bodycolor,
          { $and: [door, Ac] },
          { $and: [door, Ac, seats] },
          { $and: [door, seats] },
          { $and: [door, bodycolor] },
          { $and: [door, Ac, bodycolor] },
          { $and: [door, Ac, bodycolor, seats] },
          { $and: [door, bodycolor, seats] },
        ],
      })
        .sort({
          value: sort == "desc" ? -1 : 1,
        })
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = { carRouter };
