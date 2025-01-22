const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    addressLine: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    isDefault: {
        type: Boolean,
        default: false
    }
}); 

const userSchema = new mongoose.Schema({
    firstname:{
    type:String,
    required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true, 
        unique:true     
    },
    password:{
        type:String,
        required:true
    },
    
    addresses: [addressSchema]
  
})

module.exports = mongoose.model("user",userSchema,"users")