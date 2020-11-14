const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const mongodb = require("./config/db");

dotenv.config({path: "./config/config.env"});

mongodb();

const transRouter = require('./routes/transRouter')

const app = express();

app.use(express.json());
app.use('/api/v1/transactions',transRouter);

if(process.env.NODE_ENV == "development"){
    app.use(morgan("dev"));
}


const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT ,()=>{
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold)
});  


