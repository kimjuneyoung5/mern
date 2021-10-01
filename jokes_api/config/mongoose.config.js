const mongoose = require("mongoose");
const DB = "jokes_db";

mongoose.connect("mongodb://localhost/" + DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log(`connected to mongodb ${DB} database`))
    .catch( err => console.log(`error connecting to mongodb ${DB} database`, err))