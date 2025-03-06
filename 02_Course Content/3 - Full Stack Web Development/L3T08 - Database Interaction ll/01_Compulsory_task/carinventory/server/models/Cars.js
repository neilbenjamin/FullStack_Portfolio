const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    
    Model: {
        type: String,
        required: false,
    },
    Make: {
        type: String,
        required: true,
    },
    Owner: {
        type: String,
        required: false,
    },
    Registration: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model("Car", carSchema);
