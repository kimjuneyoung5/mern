//const { createNewJoke, findAllJokes, findOneJoke, updateExistingJoke, deleteExistingJoke } = require("../controllers/joke.controller");
const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    //Create
    app.post("/api/jokes/new", JokeController.createNewJoke);
    //ReadAll
    app.get("/api/jokes", JokeController.findAllJokes);
    //ReadOne
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    //ReadOneRandom
    //app.get("/api/jokes/random", JokeController.findRandomJoke);
    //Update
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
    //Delete
    app.delete("/api/jokes/delete/:id", JokeController.deleteExistingJoke);
}