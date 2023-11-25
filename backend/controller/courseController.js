const createCourse = (req, res) => {
  res.send("createCourse...");
};

const addLectures = (req, res) => {
  res.send("addLectures...");
};

const getAllCourses = (req, res) => {
  res.send("getAllCourses...");
};

const getCourseLect = (req, res) => {
  res.send("getCourseLect...");
};
const deleteCourse = (req, res) => {
  res.send("deleteCourse...");
};

const deleteLect = (req, res) => {
  res.send("deleteLect...");
};

module.exports = {
  createCourse,
  addLectures,
  getAllCourses,
  getCourseLect,
  deleteCourse,
  deleteLect,
};
