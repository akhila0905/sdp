import mongoose  from "mongoose";
import { ContactUsSchema } from "../models/ContactUSModel";

const Contact =mongoose.model('Contact',ContactUsSchema);

export const addNewUser=(req,res)=>{
    let newUser=new Contact(req.body);


    newUser.save((err,Contact)=>{
        if(err)
        {
            res.send(err);
        }
        res.json(Contact);
    });
}
export const getUsers=(req,res)=>{
    Contact.find({},(err,Contact)=>{
        if(err)
        {
            res.send(err);
        }
        res.json(Contact);
    });
};
export const getUserWithId=(req,res)=>{
    Contact.findById(req.params.ContactId,(err,Contact)=>{
        if(err)
        {
            res.send(err);
        }
        res.json(Contact);
    });
};
export const UpdateUser=(req,res)=>{
    Contact.findOneAndUpdate({_id:req.params.ContactId},req.body,{new:true},(err,Contact)=>{
        if(err)
        {
            res.send(err);
        }
        
        res.json(Contact);
    });
};
export const deletUser=(req,res)=>{
    Contact.remove({_id:req.params.ContactId},(err,Contact)=>{
        if(err)
        {
            res.send(err);
        }
        res.json({message:'Succesfully deleted player'});
    });
};