const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        unique:true,
        required:[true,"username is required"],
        minLength:[3,"username must be at least 3 characters long"],
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true,
        required:[true,"email is required"],
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"invalid email"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:[3,"password must be at least 3 characters long"]
    }
},{timestamps:true})

const user = mongoose.model("user",userModel);

module.exports = user;