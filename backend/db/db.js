const mongoose=require("mongoose")
const connectDB=()=>{

return mongoose.connect("mongodb+srv://labdhimehta4:429wYtpvR5Imv7NF@cluster0.zqnapxz.mongodb.net/")
}

module.exports=connectDB