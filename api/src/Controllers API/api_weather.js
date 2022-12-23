// API functions to be exported to index:
require(`dotenv`).config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;

console.log();

// Get city weather from API by name by query:
// const getVideogamesByNameApi = async (name) => {
//   const apiResponse = await axios.get(
//     `https://api.rawg.io/api/games?key=${YOUR_API_KEY}&search=${name}`
//   );

//   const videoGames = apiResponse.data.results
//     .map((game) => {
//       return {
//         id: game.id,
//         image: game.background_image,
//         name: game.name,
//         genre: game.genres.map((element) => element.name).join(', '),
//       };
//     })
//     .slice(0, 15);
//   return videoGames;
// };

const getCityWeather = async (city_name) => {
  console.log(YOUR_API_KEY);
  const apiResponse = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${YOUR_API_KEY}&units=metric`
  );

  console.log(apiResponse);
  return apiResponse;
};

getCityWeather('paris');

// Get videogames from API by ID:
// const getVideogamesByIdApi = async (id) => {
//   const apiResponse = await axios.get(
//     `https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`
//   );

//   const videoGame = {
//     image: apiResponse.data.background_image,
//     name: apiResponse.data.name,
//     genre: apiResponse.data.genres.map((element) => element.name).join(', '),
//     description: apiResponse.data.description
//       .replace(/(<([^>]+)>)/gi, '')
//       .replace(/&#39;/g, ''),
//     released: apiResponse.data.released.replace(/-/g, '/'),
//     rating: apiResponse.data.rating,
//     reviews_count: apiResponse.data.reviews_count, //TODO: CHEQUEAR
//     platforms: apiResponse.data.platforms
//       .map((element) => element.platform.name)
//       .join(`, `),
//     stores: apiResponse.data.stores.map((stores) => stores.store.domain),
//   };
//   return videoGame;
// };

module.exports = {
  getCityWeather,
};
