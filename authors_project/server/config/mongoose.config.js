const mongoose = require("mongoose");
const DB = "authors_db";

mongoose.connect("mongodb://localhost/" + DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log(`successfully connected to ${DB} db`))
    .catch( (err) => console.log(`error connecting to ${DB} db`, err));

