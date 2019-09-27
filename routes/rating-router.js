const express = require("express");

const RatingController = require("../controllers/rating-controller");

const router = express.Router();

router.post("/rating", RatingController.createRating);
/* router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies) */

module.exports = router;
