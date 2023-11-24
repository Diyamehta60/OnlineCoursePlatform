// const urserData=require("../router/userRoutes")
const User=require("../model/userModel")

const login=async(req,res)=>{
    res.send("logining data.....")
}
const signup=async(req,res)=>{
    // res.send("signing up....")json??
    const {contactNumber,password,fullname,email}=req.body;
    const data=await User.create({contactNumber,password,fullname,email})
    res.json(data);
    //
}

const deleteProfile=async(req,res)=>{
    // res.send("deleting profile  data.....")
    const _id=req.body._id
    const userToDelete=await User.findOneAndDelete({_id})
    res.json(userToDelete)

}

const changeRole=async(req,res)=>{
    // res.send("changing role.....")
    const _id=req.body._id
    //id 6560714908dcca74a600ac84...fetch user ..update user 
    const userRole=await User.findOneAndUpdate({_id},{
        role:req.body.role
    })
    res.send(userRole)

}
const getProfile=async(req,res)=>{
    // res.send("getting profile data.....")
    const _id=req.body._id
    const data=await User.findOne({_id})
    res.json(data)
}

const updateProfile=async(req,res)=>{
    // res.send("updating profile...")
    const _id=req.body._id;
    const UpdatedUser=await User.findOneAndUpdate({_id},{
        email:req.body.email,
        fullname:req.body.fullname,
    })
    res.json(UpdatedUser)
}
module.exports={login,signup,deleteProfile,changeRole,getProfile,updateProfile}
 