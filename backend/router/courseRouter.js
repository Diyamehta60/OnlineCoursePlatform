const express=require("express")
const router=express().route;

//schema{title,description,lectures[],poster,views ,rating,videos,category,teacher,date of updoded}
//routes{createCourse only by admin,addlectures only by admin,getAllCoourses by user,getCourseLecture by user,deletCourse by admin,deleteLectures by admin}
// lectSchema{lect video(url),lecture title,lect description ,lect notes}
