const express = require('express');
const path = require('path');
const router = express.Router();

// Route to serve booking.html
router.get('/booking', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/booking.html'));
});

// Handle booking form submission
router.post('/booking', (req, res) => {
  const { name, email, room, date, time } = req.body;
  if (!name || !email || !room || !date || !time) {
    return res.status(400).send('All fields are required.');
  }
  res.sendFile(path.join(__dirname, '../views/confirm.html'));
});

module.exports = router;
