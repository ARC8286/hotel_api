// const mongoose = require('mongoose');
// const mongoURL = 'mongodb://localhost:27017/Hotel';
// mongoose.connect(mongoURL);


// module.exports = db;
const mongoose = require("mongoose");
require('dotenv').config();

// MongoDB connection URL
const mongoURL = process.env.DB_URL ; 

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