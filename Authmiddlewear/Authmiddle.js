const jwt = require("jsonwebtoken")

const AuthMiddlewear = (req,res,next)=>{
    if(token){
const decode = jwt.verify(token,"masai12")
if(decode){
    const userID = decode.userID
    req.body.userID = userID
    next()
}else{
res.send("Please Login first")
}
    }else{
        res.send("Please Login first")
    }
}

module.exports={
    AuthMiddlewear
}




