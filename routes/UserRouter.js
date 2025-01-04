const UserController=require('../controller/UserController')
const express=require('express')
const UserRouter=express.Router();

UserRouter.post('/register',UserController.register);



module.exports=UserRouter;

