const mongoose = require("mongoose")

const UserSChema = mongoose.Schema({
    title : String,
    body : String,
    device : String
})

const UserModel = mongoose.model("Userdetails",UserSChema)


module.exports={
   UserModel
}