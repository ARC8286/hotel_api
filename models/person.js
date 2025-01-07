const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const personschema = new mongoose.Schema({
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
    mobile: {
        type: Number,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

})
personschema.pre('save', async function(next){
    const person = this;
    // console.log(person); 
    if (!person.isModified("password")) 
        return next();

        try {
            //generate salt
            const salt = await bcrypt.genSalt(10);
            //generate hash password
            const hashPassword = await bcrypt.hash(person.password,salt);
            person.password = hashPassword;

            next();
        } 
        catch (err) {
            return next(err);
         }
})

personschema.methods.comparepassword = async function(userpassword){
    try{
        const ismatch = await bcrypt.compare(userpassword,this.password);
        return ismatch;
    }catch(err){
        throw err;
    }
}
const person = mongoose.model('person', personschema);
module.exports = person;