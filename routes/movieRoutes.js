// Dependencies
const express = require("express"); 
const router = express.Router();
const controller = require("../controllers/movieController.js")

// Routes
// Assign the function reference directly to the route
router.get("/search", controller.searchMovies)

router.get("/movies/:id", controller.getMovieDetails)



module.exports = router