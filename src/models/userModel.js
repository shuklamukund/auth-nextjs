import mongoose from 'mongoose';
import { unique } from 'next/dist/build/utils';
import { type } from 'os';

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is must"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"email is must"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password is must"],
        minlength: [8, 'Password must be at least 8 characters'],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken:String,
    verifyTokenExpiry:Date,

})

const User=mongoose.model.users || mongoose.model("users",userSchema);

export default User;