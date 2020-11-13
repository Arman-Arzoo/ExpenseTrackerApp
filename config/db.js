const mongoose = require("mongoose");


 const mongodb = async () => {
    const URL =process.env.URL 
    try {
        const conn = mongoose.connect(URL,{
            useCreateIndex:true,
            useNewUrlParser:true,   
            useUnifiedTopology:true

        });
        console.log(`Mongodb Connected `.green.bold);
        
    } catch (err) {
        console.log(`Error ${err.message}`.red.bold);
        process.exit(1);
    }

}

module.exports = mongodb
