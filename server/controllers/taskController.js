const Task = require("../models/Task");

exports.addTask = async (req, res, next) => {
  const id = req.body.projectId;
  try {
    const task = new Task({ ...req.body, projectId: id });
    await task.save();
    res.send(task);
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  const id = req.body.projectId;
  try {
    const task = await Task.findByIdAndUpdate(id, { ...req.body });
    res.send(task);
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  const id = req.body.projectId;
  try {
    await Task.findByIdAndDelete(id);
    res.send({ message: "deleted successfully" });
  } catch (error) {
    next(error);
  }
};
