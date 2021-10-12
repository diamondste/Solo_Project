const MovieController = require("../controllers/movie.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.get('/api/movies',  MovieController.displayAllMovies);
    app.post('/api/movies', authenticate,  MovieController.createMovie);
    app.get('/api/movies/user/:id',  MovieController.displayAllByUser);
    app.get('/api/movies/:id',  MovieController.displayOneMovie);
}