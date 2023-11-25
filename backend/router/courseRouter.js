const express = require("express");
const {
  createCourse,
  addLectures,
  getAllCourses,
  getCourseLect,
  deleteCourse,
  deleteLect,
} = require("../controller/courseController");
const router = express.Router();

// only by admin if logged in
router.route("/createCourse").post(createCourse);

// only by admin if logged in
router.route("/addLectures").put(addLectures);

// by user and admin if logged in
router.route("/getAllCourses").get(getAllCourses);

// by user and admin if logged in
router.route("/getCourseLectures").get(getCourseLect);

// only by admin if logged in
router.route("/deleteCourse").delete(deleteCourse);

// only by admin if logged in
router.route("/deleteLect").delete(deleteLect);

module.exports = router;
