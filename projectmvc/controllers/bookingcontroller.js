const Booking = require('./models/bookingModel');

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.redirect('/confirm.html');
  } catch (err) {
    res.status(500).send('Booking failed.');
  }
};
