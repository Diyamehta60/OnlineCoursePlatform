const jwt = require("jsonwebtoken")
const userModel=require("../model/userModel")


const isloggin=async(req,res,next)=>{
    const authToken=req.headers.authorization
    if(authToken==null){
       return res.send("provide a token")
    }
    const token=authToken.split(" ")[1]
    const Decoded=jwt.verify(token,"shww")
    const {id}=Decoded
    const user=await userModel.findById(id)//jo user he usko ye aga r valid hua to dedenge 
    req.user=user
    next()
    // res.json(user)
    
}
const isAdmin=(req,res,next)=>{
    const user=req.user
    console.log(req.user)
    const userRole=user.role
    if(userRole=="admin"){
        next();
    }
    else{
        res.send("you are not admin")
    }
}
module.exports={isloggin,isAdmin}
