const Course = require("../model/courseModel");
const cloudinary = require("cloudinary").v2;
const createCourse = async (req, res) => {
  try {
    const { createrName, category, lectures, description, title } = req.body;
    const poster = req.files.poster;
    if (
      !createrName ||
      !category ||
      !poster ||
      !description ||
      !title
    ) {
      return res
        .status(400)
        .json({ message: "Please Provide proper Information", success: false });
    }

    const posterUrl = await cloudinary.uploader.upload(poster.tempFilePath, {
      use_filename: true,
    });
    const createdCourse = await Course.create({
      createrName,
      category,
      poster: posterUrl.secure_url,
      description,
      title,
    });
    res.status(200).json({ createdCourse, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

const addLectures = async (req, res) => {
  try {
    const { description, title, _id } = req.body;
    const video = req.files.video;
    if (!video || !description || !title || !_id) {
      return res
        .status(400)
        .json({ message: "Please Provide proper Information", success: false });
    }
    const video_url = await cloudinary.uploader.upload(video.tempFilePath, {
      resource_type: "video",
    });
    const updatedCourse = await Course.findOneAndUpdate(
      { _id },
      {
        $push: {
          lectures: {
            title,
            description,
            video: video_url.secure_url,
          },
        },
      },
      {
        new: true,
      }
    );
    if (!updatedCourse) {
      return res
        .status(404)
        .json({ message: "Course Not Found", success: false });
    }
    return res.status(200).json({ updatedCourse, success: false });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    return res.status(200).json({ courses, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

const getCourseLect = (req, res) => {
  res.send("getCourseLect...");
};
const deleteCourse = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) {
      return res
        .status(400)
        .json({ message: "Please provide courseId", success: false });
    }
    const deletedcourse = await Course.findByIdAndDelete(_id);
    if (!deletedcourse) {
      return res
        .status(404)
        .json({ message: "Course Not Found", success: false });
    }
    return res.status(200).json({ deletedcourse, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

const deleteLect = async (req, res) => {
  try {
    const { _id, lect_id } = req.body;
    if (!_id || !lect_id) {
      return res
        .status(400)
        .json({ message: "Please Provide proper Information", success: false });
    }
    const updatedCourse = await Course.findOneAndUpdate(
      { _id },
      {
        $pull: {
          lectures: {
            _id: lect_id,
          },
        },
      },
      {
        new: true,
      }
    );
    if (!updatedCourse) {
      return res
        .status(404)
        .json({ message: "Course Not Found", success: false });
    }
    return res.status(200).json({ updatedCourse, success: false });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

module.exports = {
  createCourse,
  addLectures,
  getAllCourses,
  getCourseLect,
  deleteCourse,
  deleteLect,
};
