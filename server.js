
const express = require('express');
const app = express();
const db = require('./db');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const personrouter = require('./routes/personrouter');
app.use('/person',personrouter)

const menuItemroutes = require('./routes/menuItemroutes');
app.use('/menu',menuItemroutes);

app.listen(5000,()=>{
    console.log("server listening on 5000 port")
});