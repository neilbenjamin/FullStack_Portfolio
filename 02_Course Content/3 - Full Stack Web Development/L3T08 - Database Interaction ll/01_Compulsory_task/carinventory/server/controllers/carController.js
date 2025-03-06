const Car = require("../models/Cars");
const mongoose = require("mongoose"); // Import mongoose for generating ObjectId

// Create a new car:
exports.createCar = async (req, res) => {
  try {
    // Generate a new ObjectId
    const newCarId = new mongoose.Types.ObjectId();

    // Create a new car with the generated ObjectId and other properties from the request body
    const newCar = new Car({
      _id: newCarId,
      Model: req.body.Model,
      Make: req.body.Make,
      Owner: req.body.Owner,
      Registration: req.body.Registration
    });

    // Save the new car to the database
    await newCar.save();

    res.status(201).json(newCar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
