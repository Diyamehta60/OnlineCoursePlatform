const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  // name,
  fullname: {
    type: String,
    required: [true, "please enter your name"],
  },
  // email,
  email: {
    type: String,
    required: [true, "please enter your email id"],
  },
  // password,
  password: {
    type: String,
    required: [true, "please enter password."],
  },
  // skills,
  skills: [
    {
      type: String,
    },
  ],
  // age,
  age: {
    type: Number,
  },
  // hobbies,
  hobbies: [],
  // contactNo,
  contactNumber: {
    type: String,
    required: [true, "enter your phone number"],
  },
  // role -> admin, user,
  role: {
    type: String,
    default: "user",
  },
  // courses
  courses: [
    {
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      status: String,
    },
  ],
});
module.exports = mongoose.model("User", userSchema);
