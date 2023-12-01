const express = require("express");
const {
  createCourse,
  addLectures,
  getAllCourses,
  getCourseLect,
  deleteCourse,
  deleteLect,
} = require("../controller/courseController");
const { isloggin, isAdmin } = require("../Middlewares/auth");
const router = express.Router();

// only by admin if logged in
router.route("/createCourse").post(isloggin,isAdmin,createCourse);

// only by admin if logged in
router.route("/addLectures").put(isloggin,isAdmin,addLectures);

// by user and admin if logged in
router.route("/getAllCourses").get(isloggin,getAllCourses);

// by user and admin if logged in
router.route("/getCourseLectures").get(getCourseLect);

// only by admin if logged in
router.route("/deleteCourse").delete(isloggin,isAdmin,deleteCourse);

// only by admin if logged in
router.route("/deleteLect").delete(isloggin,isAdmin,deleteLect);

module.exports = router;
