const Author = require("../models/Author");

module.exports = {
    findAll: (req, res) => {
        Author.find()
            .then(allAuthors => {
                res.json({allAuthorsArray: allAuthors})
            })
            .catch(err => {
                res.status(400).json({message: "error", error: err})
            });
    },

    findOne: (req, res) => {
        Author.findById(req.params.id)
            .then(author => {
                res.json(author)
            })
            .catch(err => {
                res.status(400).json({message: "error", error: err})
            })
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err))
    },

    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err))
    },

    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => {
                res.json({result: result})
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}