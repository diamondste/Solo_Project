require("dotenv").config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

require('./config/mongoose.config');

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


require('./routes/movie.routes')(app);
require('./routes/user.routes')(app);
app.listen(process.env.MY_PORT, () => 
    console.log(`Listening at Port ${process.env.MY_PORT}`)
)