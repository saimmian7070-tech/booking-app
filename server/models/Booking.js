const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  serviceName: String,
  userName: String,
  userId: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Booking", bookingSchema);  