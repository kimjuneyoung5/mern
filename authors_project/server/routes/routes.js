const Author = require("../controllers/Author.controller");

module.exports = (app) => {
    app.get("/api/authors", Author.findAll);
    app.get("/api/authors/:id", Author.findOne);
    app.post("/api/authors", Author.createAuthor);
    app.put("/api/authors/edit/:id", Author.updateAuthor);
    app.delete("/api/authors/delete/:id", Author.deleteAuthor);
}