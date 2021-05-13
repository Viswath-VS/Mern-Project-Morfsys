import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config(); 
const jwtKey = process.env.JWT_KEY;

// model Schema for the User docs.
const userSchema = new mongoose.Schema({
 name:{
     type: String,
     required: true,
     minlength:3,
     maxlength: 20
 },
 email:{
    type: String,
    required: true,
    minlength:12,
    maxlength: 255,
    unique: true
},
password:{
    type: String,
    required: true,
    minlength:12,
    maxlength: 1024
}
});

userSchema.methods.getToken = function(){
    const token = jwt.sign({_id:this._id},jwtKey);
    return token;
}

const User = mongoose.model("User", userSchema);

export {User};