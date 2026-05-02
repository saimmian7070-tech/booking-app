const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const auth = require("../middleware/auth");

// GET all bookings
router.get("/", auth, async (req, res) => {
  const bookings = await Booking.find({ userId: req.user.id });
  res.json(bookings);
});

// POST create booking
router.post("/", auth, async (req, res) => {
  const { serviceName, userName } = req.body;

  const newBooking = new Booking({
    serviceName,
    userName,
    userId: req.user.id
  });

  await newBooking.save();

  res.json({ message: "Booking created" });
});

module.exports = router;