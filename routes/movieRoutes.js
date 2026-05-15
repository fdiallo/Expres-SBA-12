// Dependencies
const express = require("express"); 
const router = express.Router();
const controller = require("../controllers/movieController.js")



// Routes
// Assign the function reference directly to the route
router.get("/search", controller.search)

router.get("/movies/:id", controller.movieDetails)



module.exports = router