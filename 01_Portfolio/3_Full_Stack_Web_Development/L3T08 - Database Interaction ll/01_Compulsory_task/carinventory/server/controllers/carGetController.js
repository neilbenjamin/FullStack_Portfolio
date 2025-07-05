// carGetController.js
const Car = require('../models/Cars');

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find(); // Retrieve all cars from MongoDB
    res.json(cars); // Send the cars data as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
