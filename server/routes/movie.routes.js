const MovieController = require("../controllers/movie.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.get('/api/movies', authenticate, MovieController.displayAllMovies);
    app.post('/api/movies', authenticate, MovieController.createMovie);
    app.get('/api/movies/user/:id', authenticate, MovieController.displayAllByUser);
    app.get('/api/movies/:id', authenticate, MovieController.displayOneMovie);
}