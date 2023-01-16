const express= require("express")
const { UserModel } = require("../Models/User.Model")

const UserRoutes =express.Router()

UserRoutes.get("/",async(req,res)=>{
    try{
const user = await UserModel.find()
res.send(user)
    }catch(err){
console.log(err)
    }
})

UserRoutes.post("/update",async(req,res)=>{
    const paylaod = req.body
    try{
const user =  new UserModel(paylaod)
await user.save()
res.send("New Proudct save")
    }catch(err){
        console.log(err)
    }
})

UserRoutes.delete("/delete/:id",async(req,res)=>{
   
    const id = req.params.id
    const product = await UserModel.findOne(({"_id":id}))
    const userID_in_prod = product.userID
    const userID_making_req = req.body.userID
    try{
 if(userID_making_req!==userID_in_prod){
     res.send({"msg":"You are not authoraised"})
 }else{
     await UserModel.findByIdAndDelete({"_id":id})
     res.send("Deleted the note")
 }
    }
    
    catch(err){
 console.log(err)
 res.send({"msg":"something went wrong"})
    }
 })

 module.exports={
    UserRoutes
 }