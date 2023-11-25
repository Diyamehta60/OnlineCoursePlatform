const express=require("express");
const { createCourse, addLectures, getAllCourses, getCourseLect, deleteCourse, deleteLect } = require("../controller/courseController");
const router=express.Router();

//routes{createCourse only by admin,addlectures only by admin,getAllCoourses by user,getCourseLecture by user,deletCourse by admin,deleteLectures by admin}
router.route("/createCourse").post(createCourse)
router.route("/addLectures").put(addLectures)
router.route("/getAllCourses").get(getAllCourses)
router.route("/getCourseLect").get(getCourseLect)
router.route("/deleteCourse").delete(deleteCourse)
router.route("/deleteLect").delete(deleteLect)

module.exports=router;


