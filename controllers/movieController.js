const axios = require("axios")
require("dotenv").config()


const API_KEY = process.env.OMDB_API_KEY
const BASE_URL = "http://www.omdbapi.com/"

const searchMovies = async (req, res) => {

    try {
        const searchTerm = req.query.title
        const response = await axios.get(BASE_URL, {
            params: {
                s: searchTerm,
                apiKey: API_KEY
            }
        })

        if (response.data.Response === 'True') {
            res.json(response.data.Search);
        } else {
            res.status(404).json({ error: "Title query parameter is required" })
        }

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from OMDb' })
    }

}


const getMovieDetails = async (req, res) => {

     try {
         
         const imdbID = req.params.id;
         const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`;
         
         
         const response = await axios.get(url)
         
         console.log("Movies Details: ", response.data)

        if (response.data.Response === 'True') {
            res.json(response.data);
        } else {
            res.status(404).json({ error: "IMDb ID is required" })
        }

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from OMDb' })
    }

}

module.exports = { searchMovies, getMovieDetails }