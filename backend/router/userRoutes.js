const express=require("express");
const { updateProfile, login, signup, getProfile, deleteProfile, changeRole } = require("../controller/userController");

const router=express.Router();
router.route("/login").post(login)
router.route("/signup").post(signup)
router.route("/getProfile").get(getProfile)
router.route("/updateProfile").put(updateProfile)
router.route("/deleteProfile").delete(deleteProfile)
router.route("/changeRole").put(changeRole)

module.exports=router;