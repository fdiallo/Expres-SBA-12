//const express = require("express")
const axios = require("axios")
require("dotenv").config()


//const url = `http://www.omdbapi.com/api/search${apikey}&${t}`

const searchMovies = async (req, res) => {

    //res.send("Searching for movies...")
    console.log("Searching for movies...")


    const API_KEY = process.env.OMDB_API_KEY
    const BASE_URL = "http://www.omdbapi.com/"

    try {
        const searchTerm = req.query.title
        const response = await axios.get(BASE_URL, {
            params: {
                s: searchTerm,
                apiKey: API_KEY
            }
        })

        //console.log("Request Params: ", req.req)

        //console.log("Response Status: ", response.data.status)
        console.log("Response Data: ", response.data)

        if (response.data.Response === 'True') {
            res.json(response.data.Search);
        } else {
            //res.status(404).json({ error: response.data.Error })
            res.status(404).json({ error: "Title query parameter is required" })
        }


    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from OMDb' })
    }

}


const getMovieDetails = (req, res) => {

    res.send("Getting movies details...")
    console.log("Getting movies details...")

}

module.exports = { searchMovies, getMovieDetails }