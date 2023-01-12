const mongoose = require("mongoose");
const { connected } = require("process");

var mongoURL  = 'mongodb+srv://prajaktaumale:umale123@cluster0.kclg3kv.mongodb.net/authenticate'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log("MANGO DB CONNECTED SUCCESSFULLY")
})
db.on('error',()=>{
    console.log("failed")
})

module.exports = mongoose