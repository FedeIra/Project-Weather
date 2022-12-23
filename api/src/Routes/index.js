const { Router } = require('express');
const router = Router();

const { getCityWeather } = require('../Controllers API/api_weather.js');

// ROUTES:
// Get city weather from API by name query:
router.get('/weather', async (req, res) => {
  const { city_name } = req.query;
  try {
    let weather_city = await getCityWeather(city_name);
    res.json(weather_city);
  } catch (error) {
    return res.status(204).send({ Error: error.message });
  }
});

// router.get('/weather/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     let movieDetail = await getMoviesByIdApi(id);

//     if (movieDetail.hasOwnProperty('json')) {
//       return res.json(movieDetail.data);
//     }

//     const trailer = await getTrailerMovie(id);

//     movieDetail = {
//       ...movieDetail,
//       trailer,
//     };
//     res.send(movieDetail);
//   } catch (error) {
//     return res.status(204).send({ Error: error.message });
//   }
// });

// Get TV series detail from JSON:
// router.get('/tv/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     let detail = await getDetailTVJSON(id);
//     let trailer = await getTrailerSerie(detail.title);

//     let TVSeriesDetail = {
//       ...detail,
//       trailer,
//     };
//     res.send(TVSeriesDetail);
//   } catch (error) {
//     return res.status(204).send({ Error: error.message });
//   }
// });

module.exports = router;
