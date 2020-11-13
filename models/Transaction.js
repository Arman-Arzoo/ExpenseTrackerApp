const mongoose = require("mongoose");
const mongodb = require("../config/db");


const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true, "please enter some text"]
    },
    amount:{
        type:Number,
        required:[true, "please add a positive or negative number"]
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});


module.exports = mongoose.model("Transaction",TransactionSchema);