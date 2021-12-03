import mongoose  from "mongoose";

const Schema=mongoose.Schema;

export const UserSchema=new Schema({
   email:{
       type:String,
    required:true
   },
   password:{
       type:String,
       required:true
   },
 UserName:{
     type:String,
     required:true
 },
    created_date:{
        type:Date,
        default:new Date
    },

});