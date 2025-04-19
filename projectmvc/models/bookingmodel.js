const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  room: String,
  date: Date,
  time: String
});

module.exports = mongoose.model('Booking', bookingSchema);
