const express = require('express');
const app = express();
require('dotenv').config();

const bookingRouter = require('./routes/booking');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', express.static('views'));

app.use('/booking', bookingRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
