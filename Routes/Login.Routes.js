const express = require("express")
const bcrypt = require('bcrypt');
const { LoginModel } = require("../Models/Login.Model");
const LoginRoutes = express.Router()
const jwt = require("jsonwebtoken")


 LoginRoutes.post("/register" ,async(req,res)=>{
    const {name,email,gender,password} = req.body
    try{
        bcrypt.hash(password, 8, async(err, secure_pass)=> {
           if(err){
            console.log(err)
            console.log({"err":"Err while hashing password"})
           }else{
            const user = new LoginModel({name,email,gender,password:secure_pass})
            await user.save()
            res.send("User registered suecessfully")
           }
        })
    }catch(err){
console.log(err)
console.log({"err":"Err while rigistering user by post req"})
    }
 })

 LoginRoutes.post("/login",async(req,res)=>{ 
    const {email,password} = req.body
    try{
        const user = await LoginModel.find({email})
        console.log(user)
if(user.length>0){
    bcrypt.compare(password, user[0].password, (err, result)=> {
        // result == true
        console.log(result)
        if(result){
            var token = jwt.sign({ userID:user[0]._id }, 'masai12');
            res.send({"msg":"Login successful","token":token})
            console.log(token)
        }else{
            res.send("wrong credential") 
        }
    })
}
else{
    res.send("wrong credential")
}
    }catch(err){
console.log(err)
console.log("Err while login in")
    }
})

 module.exports={
    LoginRoutes
 }



