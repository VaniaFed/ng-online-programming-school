const coursesModel = require('../models/Course');
const { ErrorHandler } = require('../helpers/error-handler');
const getCourses = async (req, res) => {
  const courses = await coursesModel.find();
  res.status(200).json(courses);
};

const addCourse = (req, res) => {
  const body = req.body;
  const course = new coursesModel(body.course);
  course.save();
  const status = {
    success: true,
    err: null,
  };
  res.status(200).json(status);
};

const editCourse = async (req, res) => {
  const { _id, name, price, imgSrc } = req.body.course;
  const updatedCourse = await coursesModel.updateOne({_id}, { $set: {
    name,
    price,
    imgSrc
  }});
  res.status(200).json(updatedCourse);
};


const getCourseById = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new ErrorHandler(300, 'Id hasn\'t been provided');
    }
    const course = await coursesModel.findOne({_id: id});
    if (!course) {
      throw new ErrorHandler(300, `Course with id ${id} hadn't been found`);
    }
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }


};

module.exports = {
  getCourses,
  addCourse,
  getCourseById,
  editCourse
};
