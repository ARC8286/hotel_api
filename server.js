
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport =require('./auth');
const bodyparser = require('body-parser');

const PORT = process.env.PORT  || 3000;


const logrequest = (req,res,next)=>{
console.log(`[${new Date().toLocaleString()}] request made to : ${req.originalUrl}`);
next();
} 
app.use(logrequest);//it work for all router

app.use(bodyparser.json());


app.use(passport.inigitialize());

const auth = passport.authenticate('local',{session:false});

const personrouter = require('./routes/personrouter');
app.use('/person',personrouter)  

const menuItemroutes = require('./routes/menuItemroutes');

app.use('/menu',menuItemroutes);

app.listen(PORT,()=>{
    console.log("server listening on 5000 port")
});


