const UserController=require("../controller/UserController")
const express=require('express')
const UserRouter=express.Router();

UserRouter.post("/register",UserController.register);
UserRouter.post("/login",UserController.login);
UserRouter.get("/users",UserController.getAllUsers);
UserRouter.get("/:id",UserController.getUserById);
UserRouter.put("/:id/address", UserController.addAddress); 
UserRouter.get("/:id/addresses", UserController.viewAddresses); 
UserRouter.put("/:id/address/:addressId", UserController.updateAddress); 
UserRouter.delete("/:id/address/:addressId", UserController.deleteAddress);

module.exports=UserRouter;

