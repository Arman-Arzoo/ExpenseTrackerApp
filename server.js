const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({path: "./config/config.env"});


const app = express();

app.get('/',(req,res)=>{
    res.send("good")
});

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT ,()=>{
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold)
})


