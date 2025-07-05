const Car = require('../models/Cars');

// Function to delete a car by carId
exports.deleteCar = async (req, res) => {
  const carId = req.params.carId;

  try {
    const deletedCar = await Car.findByIdAndRemove(carId);//Remove carId.

    if (!deletedCar) {
      res.status(404).json({ error: 'Car not found' });
    } else {
      res.status(200).json({ message: 'Car deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
