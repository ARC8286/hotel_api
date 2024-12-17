const mongoose = require("mongoose");
const personschema = new mongoose.Schema ({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true
    },
    work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        require: true
    },
    mobile : {
        type: Number,
        unique: true,
        require: true
    },
    email : {
        type : String,
        unique : true
    },
    address : {
        type : String
    },
    salary : {
        type : Number,
        require : true
    }

})
const person  = mongoose.model('person',personschema);
module.exports = person;