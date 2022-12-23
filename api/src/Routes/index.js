const { Router } = require('express');
const router = Router();

// const Comment = require('../Db/Schema/comment.js');
// const Like = require('../Db/Schema/like.js');

const {
  getMoviesByIdApi,
  getTrailerMovie,
} = require('../controllers API/detailedMovie.js');

// router.use('/payment', paymenRoutes);

// ROUTES:

// Get movie from API by ID with trailer:
// router.get('/movies/:id', async (req, res) => {
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
