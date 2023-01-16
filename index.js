const express = require("express")
const { AuthMiddlewear } = require("./Authmiddlewear/Authmiddle")
const { connection } = require("./config/db")
const { LoginRoutes } = require("./Routes/Login.Routes")
const { UserRoutes } = require("./Routes/User.Routes")
var cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
res.send("Welcome")
})

app.use("/users",LoginRoutes)
// app.use(AuthMiddlewear)
app.use("/posts",UserRoutes)

app.listen(3500,async()=>{
    try{
await connection

    }catch(err){
console.log(err)
console.log({"err":"Err while running server"})

    }
    console.log("server running on 3500")
})
