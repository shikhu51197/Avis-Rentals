const express = require("express");
const { CarModel } = require("../model/car.model");
const carRouter = express.Router();

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
  try {
    const {
      page = 1,
      limit = 5,
      sort_by = "asc",
      value_low,
      value_high,
      location,
      model,
      brand,
      door,
      Ac,
      bodycolor,
      seats,
    } = req.query;

    const filterQuery = {};
    if (door) {
      filterQuery.door = door;
    }
    if (Ac) {
      filterQuery.Ac = Ac;
    }
    if (bodycolor) {
      filterQuery.bodycolor = bodycolor;
    }
    if (seats) {
      filterQuery.seats = seats;
    }

    const carCount = await CarModel.countDocuments(filterQuery);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    if (endIndex < carCount) {
      results.next = {
        page: +page + 1,
        limit: +limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: +page - 1,
        limit: +limit,
      };
    }

    let sort_order = 1;
    if (sort_by === "desc") {
      sort_order = -1;
    }

    let cars;
    if (location) {
      cars = await CarModel.find({ location })
        .sort({ value: sort_order })
        .skip(startIndex)
        .limit(limit);
    } else if (model) {
      cars = await CarModel.find({ model })
        .sort({ value: sort_order })
        .skip(startIndex)
        .limit(limit);
    } else if (brand) {
      cars = await CarModel.find({ brand })
        .sort({ value: sort_order })
        .skip(startIndex)
        .limit(limit);
    } else if (value_high && value_low) {
      cars = await CarModel.find({
        $and: [{ value: { $gt: value_low } }, { value: { $lt: value_high } }],
      })
        .sort({ value: sort_order })
        .skip(startIndex)
        .limit(limit);
    } else {
      cars = await CarModel.find(filterQuery)
        .sort({ value: sort_order })
        .skip(startIndex)
        .limit(limit);
    }

    results.results = cars;
    return res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { carRouter };
