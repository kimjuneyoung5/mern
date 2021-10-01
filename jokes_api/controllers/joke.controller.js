const Joke = require('../models/joke.model');

module.exports = {
    //Create
    createNewJoke: (req, res) => {
        //console.log(req.body);
        Joke.create(req.body)
            .then(createdJoke => res.json({message: "Success", joke: createdJoke}))
            .catch(err => res.json({message: "Error", error: err}));
    },
    //ReadAll
    findAllJokes: (req, res) => {
        Joke.find()
            .then(allDaJokes => res.json({allTheJokes: allDaJokes}))
            .catch(err => res.json({message: "Error on findAll", error: err}));
    },
    //ReadOne
    findOneJoke: (req, res) => {
        Joke.findById(req.params.id)
            .then(oneSingleJoke => res.json({joke: oneSingleJoke}))
            .catch(err => res.json({message: "Error on findOne", error: err}));
    },
    //ReadRandomOne
    findRandomJoke: (req, res) => {
        Joke.find()
            .then(allJokes => res.json({oneRandomJoke: allJokes[Math.floor(Math.random() * Object.keys(allJokes).length)]}))
            //.then(console.log(allJokes))
            .catch(err => res.json({message: "Error on RandomFind", error: err}));
    },
    //Update
    updateExistingJoke: (req, res) => {
        //Joke.findOneAndUpdate({_id: req.params.id}, req.body)
        Joke.findByIdAndUpdate(req.params.id, req.body)
            .then(updatedJoke => res.json({joke: updatedJoke}))
            .catch(err => res.json({message: "Error on updating", error: err})); 
    },
    //Delete
    deleteExistingJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json({result: result}))
            .catch(err => res.json({message: "Error on deleting", error: err}));
    }
}