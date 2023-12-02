const express = require("express");
const {
  updateProfile,
  login,
  signup,
  getProfile,
  deleteProfile,
  changeRole,
  profilePic
} = require("../controller/userController");
const { isloggin } = require("../Middlewares/auth");

const router = express.Router();
router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/getProfile").get(getProfile);
router.route("/updateProfile").put(updateProfile);
router.route("/deleteProfile").delete(deleteProfile);
router.route("/changeRole").put(changeRole);
router.route("/addProfilePic").post(isloggin ,profilePic)

module.exports = router;
