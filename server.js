
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyparser = require('body-parser');
const PORT = process.env.PORT  || 3000;

app.use(bodyparser.json());
const personrouter = require('./routes/personrouter');
app.use('/person',personrouter)

const menuItemroutes = require('./routes/menuItemroutes');
app.use('/menu',menuItemroutes);

app.listen(PORT,()=>{
    console.log("server listening on 5000 port")
});