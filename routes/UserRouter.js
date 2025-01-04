const UserController=require("../controller/UserController")
const express=require('express')
const UserRouter=express.Router();

UserRouter.post("/register",UserController.register);
UserRouter.post("/login",UserController.login)



module.exports=UserRouter;

