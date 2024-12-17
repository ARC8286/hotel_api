const mongoose = require('mongoose');
const menuItemschema = new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    taste :{
        type:String,
        enum : ['spicy','sweet','sour'],
        require : true
    },
    is_drinking : { 
        type:Boolean,
         default:false
    },
    ingredients : {
        type :[String],
        require : true
    },
    num_sale : {
        type : Number,
        default : 0
    }
}) 
const menuItem = mongoose.model('menuItem',menuItemschema);
module.exports = menuItem;