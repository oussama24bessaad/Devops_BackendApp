const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'you have to add a name'],
    minLength:3,
  },
  age:Number,
  occupation:String,
  email:{
    type:String,
    unique:[true,'this email has been used before'],
  },
  address:{
    street:String,
    postalCode:Number,
    country:String
  },
  createdAt:{
    type:Date,
    default:new Date()
  }
})

module.exports = mongoose.model('user',userSchema)
