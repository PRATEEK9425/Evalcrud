const mongoose = require("mongoose")

const LoginSChema = mongoose.Schema({
    name : String,
email: String,
gender : String,
password : String
})

const LoginModel = mongoose.model("Logindetails",LoginSChema)


module.exports={
    LoginModel
}