require("dotenv").config();
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide proper information", success: false });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    const passcmp = bcrypt.compareSync(password, user.password);
    if (!passcmp) {
      return res
        .status(400)
        .json({ message: "Please provide proper password.", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({ user, token, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};
const signup = async (req, res) => {
  try {
    const { contactNumber, password, fullname, email } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPwd = bcrypt.hashSync(password, salt);
    const user = await User.create({
      contactNumber,
      password: hashPwd,
      fullname,
      email,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({ success: true, user, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const _id = req.body._id;
    if (!_id) {
      return res
        .status(400)
        .json({ message: "Please provide Id", success: false });
    }
    const result = await User.findOneAndDelete({ _id });
    if (!result) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    return res.status(200).json({ result, success: true });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const changeRole = async (req, res) => {
  try {
    const _id = req.body._id;
    if (!_id) {
      return res
        .status(400)
        .json({ message: "Please provide Id", success: false });
    }
    const user = await User.findOneAndUpdate({ _id }, { role: req.body.role });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    return res.status(200).json({ user, success: true });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const getProfile = async (req, res) => {
  try {
    const _id = req.body._id;
    if (!_id) {
      return res
        .status(400)
        .json({ message: "Please provide Id", success: false });
    }
    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }
    return res.status(200).json({ user, success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const _id = req.body._id;
    if (!_id) {
      return res
        .status(400)
        .json({ message: "Please provide Id", success: false });
    }
    const updatedUser = await User.findOneAndUpdate(
      { _id },
      {
        email: req.body.email,
        fullname: req.body.fullname,
      }
    );
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    return res.status(200).json({ updatedUser, success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  login,
  signup,
  deleteProfile,
  changeRole,
  getProfile,
  updateProfile,
};
