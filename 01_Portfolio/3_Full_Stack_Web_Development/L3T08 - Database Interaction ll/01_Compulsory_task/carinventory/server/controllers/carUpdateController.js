const Car = require("../models/Cars");
const mongoose = require("mongoose");

// Update an existing car by ID: //Solution Courtesy of Hyperion and Open/Ai
exports.putCar = async (req, res) => {
  const { carId } = req.params; // Extract carId from request parameters
  console.log(`Received PUT request for carId: ${carId}`);
  try {
    // Find the car by its ID
    const car = await Car.findById(carId);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    // Update car properties based on request body data
    if (req.body.Model) {
      car.Model = req.body.Model;
    }
    if (req.body.Make) {
      car.Make = req.body.Make;
    }
    if (req.body.Owner) {
      car.Owner = req.body.Owner;
    }
    if (req.body.Registration) {
      car.Registration = req.body.Registration;
    }

    // Save the updated car to the database
    await car.save();

    res.status(200).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
