const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    desc:{type:String,required:true},
    amount:{type:String,required:true}
});

module.exports = User = mongoose.model("user",userSchema);