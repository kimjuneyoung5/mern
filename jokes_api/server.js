const express = require("express");
const app = express()
const port = 1377;


require("./config/mongoose.config");

//middleware
app.use(express.json(), express.urlencoded({extended: true}));

//route always after middleware
//require("./routes/joke.routes")(app)
const AllMyJokeRoutes = require("./routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(port, () => console.log(`server up on port: ${port}`));