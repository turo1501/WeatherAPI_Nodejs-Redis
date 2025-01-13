const express = require('express');
const router = express.Router();
const getWeather = require('../controller/weather');

router.route('/:city').get((req, res, next) => {
  console.log(`Request received for city: ${req.params.city}`); // Log the request
  getWeather(req, res, next);
});


module.exports = router;