const Movie = require('../models/movie.model');
const jwt = require('jsonwebtoken');

module.exports = {
    
    displayAllMovies: (req, res) => {
        Movie.find({})
        .populate("user_id", "username" )
        .then((allMovies) => {
            res.json(allMovies);
        })
        .catch((err)=> {
            console.log("Displaying all movies/tv show failed");
            res.status(400).json(err);
        })
    },

    displayAllByUser: (req, res)=>{
        Movie.find({user_id: req.params.id})
        .then((allUserMovies)=> {
            res.json(allUserMovies);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },

    displayOneMovie: (req, res)=>{
        Movie.findOne({_id: req.params.id})
        .then((oneMovie)=>res.json(oneMovie))
        .catch((err)=>{
            console.log("Displaying one movie/tv show failed");
            res.status(400).json(err)
        })
    },

    createMovie: (req, res)=>{
        const movie = new Movie(req.body);
        const decoded = jwt.decode(req.cookies.usertoken, {complete: true});

        movie.user_id = decoded.payload.user_id;

        movie.createdByUserName = decoded.payload.username;

        console.log(decoded.payload.user_id);
        console.log(decoded.payload.username);
        console.log(movie);

        Movie.create(movie)
        .then((newMovie)=>
            res.json(newMovie))
        .catch((err)=> {
            console.log("Create a movie/tv show failed")
            res.status(400).json(err)
        })

    }


}