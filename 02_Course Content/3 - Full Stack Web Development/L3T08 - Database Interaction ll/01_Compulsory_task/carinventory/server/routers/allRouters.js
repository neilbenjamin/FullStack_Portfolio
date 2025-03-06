const express = require('express');
const router = express.Router();
const carDeleteController = require('../controllers/carDeleteController'); 
const carGetController = require('../controllers/carGetController');
const carUpdateController = require('../controllers/carUpdateController');
const carController = require("../controllers/carController");
const carBatchUpdateController = require('../controllers/carBatchUpdateController')

router.delete('/delete/:carId', carDeleteController.deleteCar);
router.get('/get', carGetController.getAllCars); 
router.post("/new", carController.createCar);
router.put('/update/:carId', carUpdateController.putCar)
router.put('/update-many', carBatchUpdateController.batchUpdateCars)

module.exports = router;
