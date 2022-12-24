// API functions to be exported to index:
require(`dotenv`).config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;

// Get city weather from API by name by query:
const getCityWeather = async (city_name) => {
  console.log(YOUR_API_KEY);
  const apiResponse = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${YOUR_API_KEY}&units=metric`
  );

  const climate = {
    temp: Math.round(apiResponse.data.main.temp),
    min: Math.round(apiResponse.data.main.temp_min),
    max: Math.round(apiResponse.data.main.temp_max),
    img: apiResponse.data.weather[0].icon,
    id: apiResponse.data.id,
    name: apiResponse.data.name,
    weather: apiResponse.data.weather[0].main,
    humidity: apiResponse.data.main.humidity,
    lon: apiResponse.data.coord.lon,
    lat: apiResponse.data.coord.lat,
    description: apiResponse.data.weather[0].description,
    wind: apiResponse.data.wind.speed,
    pressure: apiResponse.data.main.pressure,
  };

  return climate;
};

// getCityWeather('paris');

// Get 4 days city weather from API by name by query:
const getWeekCityWeather = async (lat, lon) => {
  const apiResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${YOUR_API_KEY}`
  );

  const climateWeek = {
    temp: Math.round(apiResponse.data.list[0].main.temp),
  };

  console.log(climateWeek);

  return climateWeek;

  // const apiResponseWeek = apiResponse.data.list[0].main.temp;

  // const climateWeek = {
  //   temp: Math.round(apiResponse.data.main.temp),
  //   min: Math.round(apiResponse.data.main.temp_min),
  //   max: Math.round(apiResponse.data.main.temp_max),
  //   img: apiResponse.data.weather[0].icon,
  //   id: apiResponse.data.id,
  //   name: apiResponse.data.name,
  //   weather: apiResponse.data.weather[0].main,
  //   humidity: apiResponse.data.main.humidity,
  //   lon: apiResponse.data.coord.lon,
  //   lat: apiResponse.data.coord.lat,
  //   description: apiResponse.data.weather[0].description,
  //   wind: apiResponse.data.wind.speed,
  //   pressure: apiResponse.data.main.pressure,
  // };

  // return climateWeek;
};

module.exports = {
  getCityWeather,
  getWeekCityWeather,
};
