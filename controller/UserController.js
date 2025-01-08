const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/Config');

const UserController=({
    register:async(req,res)=>{
        try{
            const {firstname,lastname,email,password}=req.body
            if(!(firstname,lastname,email,password)){
               return res.status(400).json({message:'All inputs is required'});
            }
            const user=await User.findOne({email})
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
        catch(error){
            res.status(500).json({message:error.message});
        }
    },
    login:async(req,res)=>{
        try {
            const {email,password} = req.body;
            if(!email || !password){
                return res.status(400).json({message:"All inputs is required"});
            }
            const user = await User.findOne({email});
            if(!user){
                return res.status(400).json({message:"User not found"});
            }
            const comparePassword = await bcrypt.compare(password,user.password);
            if(!comparePassword){
                return res.status(400).json({message:"Password is incorrect"});
            }
            const token = jwt.sign({id:user._id,name:user.firstname},SECRET_KEY,{expiresIn:"1d"});
            res.cookie("token",token,{
                httpOnly:true,
                secure:true,
                sameSite:"none",
                expire:new Date(Date.now()+24*60*60*1000),
             });
             res.status(200).json({message:"User login successfully",token});
        } catch (error) {
            res.status(500).json({message:error.message});
        }

    },
    getAllUsers:async(req,res)=>{ 
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    },
    getUserById:async(req,res)=>{
        try {
            const {id} = req.params;
            const user = await User.findById(id).select("-password -__v -_id");
            if(!user){
                return res.status(400).json({message:"User not found"});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({message:error.message});          
        }
    }
});

module.exports = UserController;
