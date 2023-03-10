const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {type:String, require},
email: {type:String, require},
    mnumber: {type:String, require},
    password: {type:String, require},
    //cpassword: {type:String, require},
    isAdmin: {type:Boolean, require, default:false},
}, {
    timestamps: true
})

module.exports = mongoose.model('users', userSchema)