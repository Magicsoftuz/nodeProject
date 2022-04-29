const express = require('express');
const tourRoute = require('./routes/tourRoutes');
const userRoute = require('./routes/userRoutes');
const app = express();

const morgan = require('morgan');

app.use(express.json()); // Middleware qorovulcha

app.use(morgan('common'));

app.use((req, res, next) => {
  req.time = Date.now();
  next();
});

app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);

module.exports = app;
