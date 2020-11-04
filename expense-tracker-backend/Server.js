const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
 
dotenv.config();




// Set up the Server 

const expenseApp = express();
expenseApp.use(express.json());
expenseApp.use(cors());

const port = process.env.PORT || 4000;

expenseApp.listen(port, ()=>{console.log("server started at http://localhost:4000")});



// Set up for mongoose database

const uri = process.env.URI || "mongodb://127.0.0.1:27017/expenseTracker"

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
},
(err)=>{
    if(err){
        throw err;
       
    }
    else{
        console.log("Successfully connected to mongodb Database");
    }

});

