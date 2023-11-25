// const router=require("../router/courseRouter")

const deleteLect=(req,res)=>{
    res.send("deleteLect...")
}

const deleteCourse=(req,res)=>{
    res.send("deleteCourse...")
}

const getCourseLect=(req,res)=>{
    res.send("getCourseLect...")
}

const getAllCourses=(req,res)=>{
    res.send("getAllCourses...")
}

const addLectures=(req,res)=>{
    res.send("addLectures...")
}

const createCourse=(req,res)=>{
    res.send("createCourse...")
}

module.exports={createCourse,addLectures,getAllCourses,getCourseLect,deleteCourse,deleteLect}