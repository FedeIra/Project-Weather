const { Router } = require('express');
const router = Router();

const {
  getCityWeather,
  getWeekCityWeather,
} = require('../Controllers API/api_weather.js');

// ROUTES:

// Get city weather from API by name query:
router.get('/weather', async (req, res) => {
  const { city_name } = req.query;
  try {
    const climate = await getCityWeather(city_name);
    res.json(climate);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Get city week weather from API by lat and lon:
router.get('/weather/week', async (req, res) => {
  const { lat, lon } = req.query;

  console.log(lat, lon);
  try {
    const climate_week = await getWeekCityWeather(lat, lon);
    res.json(climate_week);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
