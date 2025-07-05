// carBatchUpdateController.js

const Cars = require("../models/Cars"); //Path to shema/model
const mongoose = require("mongoose");

exports.batchUpdateCars = async (req, res) => {
  try {
    const { updateData } = req.body; // Data to update the cars with

    // Perform the batch update
    const result = await Cars.updateMany({}, { $set: updateData }); //updateAll MongoDB function

    // Check if any documents were updated and respond accordingly
    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "No cars were updated." });
    }

    // Respond with success if documents were updated
    res.status(200).json({ message: "All cars updated successfully.", modifiedCount: result.modifiedCount });
  } catch (error) {
    console.error(error); // Log the error to the console for debugging
    res.status(500).json({ error: "Internal server error" });
  }
};
