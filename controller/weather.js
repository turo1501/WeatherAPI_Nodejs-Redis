const asyncWrapper = require('../middleware/async');
const axios = require('axios');
const { getWeatherData, setWeatherData } = require('../redis/redis');

const getWeather = asyncWrapper(async (req, res) => {
  const city = req.params.city;
  const apiKey = 'ZWPRBSJW2QQN8WLAZKM5GSALS';
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}&contentType=json`;
  const cacheWeather = await getWeatherData(city);

  if (cacheWeather) {
    res.status(200).json(JSON.parse(cacheWeather));
  } else {
    const weatherData = await axios.get(apiUrl);
    res.status(200).json(weatherData.data);
    setWeatherData(city, JSON.stringify(weatherData.data), 6000);
  }
});

module.exports = getWeather; // Ensure this export is present