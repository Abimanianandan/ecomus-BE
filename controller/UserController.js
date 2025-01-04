const User=require('../model/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const UserController=({

    register:async(req,res)=>{
        try{
            const {firstname,lastname,email,password}=req.body
            if(!(firstname,lastname,email,password)){
               return res.status(400).json({message:'All inputs is required'});
            }
            const user=await User.findOne(email)
            if(user){
                return res.status(400).json({message:"Email Aldready Exist"});
            }
            const hashPassword=await bcrypt.hash(password,10);
            const newUser=new User({
                firstname,lastname,email,password:hashPassword
            })
            const savedUser=await newUser.save();
            res.status(200).json({message:"User Registered Successfully",savedUser});
            }
        catch(err){
    res.status(500).json({message:err.message});
        }
    },

});

module.exports=UserController;
