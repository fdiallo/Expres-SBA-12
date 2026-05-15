
// Dependencies
const express = require("express")
const app = express()
const axios = require("axios")
require("dotenv").config()
const PORT = process.env.PORT

const movieRoutes = require("./routes/movieRoutes.js")


// Middleware




// Routes

// Mount the router with the /api prefix
app.use("/api", movieRoutes);







// Port
app.listen(PORT, () => {
    console.log(`Server is listening to PORT: ${PORT}`)
})