const Project = require("../models/Project");

// const id = req.user._id;

exports.newProject = async (req, res, next) => {
  const id = req.user._id;
  try {
    const project = new Project({ ...req.body, owner: id });
    await project.save();
    res.send(project);
  } catch (error) {
    next(error);
  }
};

exports.updateProject = async (req, res, next) => {
  const id = req.user._id;
  try {
    const project = await Project.findByIdAndUpdate(id, { ...req.body });
    res.send(project);
  } catch (error) {
    next(error);
  }
};

exports.deleteProject = async (req, res, next) => {
  const id = req.user._id;
  try {
    await Project.findByIdAndDelete(id);
    res.send({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
};
