// const mongoose = require('mongoose');
// const mongoURL = 'mongodb://localhost:27017/Hotel';
// mongoose.connect(mongoURL);


// module.exports = db;
const mongoose = require("mongoose");

// MongoDB connection URL
const mongoURL = "mongodb+srv://amitchaudhary8286:GeVX9QLLML4E5guY@cluster0.zcyvj.mongodb.net/hotel"; 

// Connect to MongoDB
mongoose.connect(mongoURL);
const db = mongoose.connection;

db.on("connected",()=>{
    console.log("database connected");
})

db.on("error",()=>{
    console.log("error in database connection")
})

db.on("disconnected",()=>{
    console.log("database disconnected");
})