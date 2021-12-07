import mongoose  from "mongoose";

const Schema=mongoose.Schema;

export const ContactUsSchema=new Schema({
   email:{
       type:String,
    required:true
   },
   Name:{
       type:String,
       required:true
   },
 message:{
     type:String,
     required:true
 },
    created_date:{
        type:Date,
        default:new Date
    },

});