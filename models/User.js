const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    authId : String,
    name:String,
    picture:String
})


module.exports = user = mongoose.model("user" , userSchema)