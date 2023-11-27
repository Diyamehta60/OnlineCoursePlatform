const course = require("../model/courseModel")
const createCourse = async (req, res) => {
  const { createrName, category, poster, lectures, description, title } = req.body
  const Singlecourse = await course.create({ createrName, category, poster, lectures, description, title })
  res.json(Singlecourse)

};

const addLectures = async (req, res) => {
  const { video, description, title, _id } = req.body
  const updatedCourse = await course.findOneAndUpdate({ _id }, {
    $push: {
      lectures: {
        title,
        description,
        video
      }
    }
  }, {
    new: true
  })
  res.json(updatedCourse)
  console.log("lect is added")
};

const getAllCourses =async (req, res) => {
  const allCourses=await course.find({})
  res.json(allCourses)
};

const getCourseLect = (req, res) => {
  res.send("getCourseLect...");
};
const deleteCourse = async(req, res) => {
  const {_id}= req.body
  const Deletedcourse = await course.findByIdAndDelete(_id)
  res.json(Deletedcourse)
};

const deleteLect = async(req, res) => {
  const {_id,lect_id}=req.body
  const updatedCourse = await course.findOneAndUpdate({ _id }, {
    $pull: {
      lectures: {
        _id:lect_id
      }
    }
  }, {
    new: true
  })
  res.json(updatedCourse)
  console.log("lecture is deleted")
};

module.exports = {
  createCourse,
  addLectures,
  getAllCourses,
  getCourseLect,
  deleteCourse,
  deleteLect,
};
