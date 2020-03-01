// Responsible for handling all user-controlls

const User = require("../models/User");

exports.newUser = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    const user = new User({ email, password, name });
    await user.generateToken();
    await user.save();
    res.send(user);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(email, password);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

exports.fetchUser = async (req, res, next) => {
  /* eslint no-underscore-dangle: 0 */
  const id = req.user._id;
  try {
    const user = await User.findById(id);
    await user.populate("projects").execPopulate();
    res.send(user.projects);
  } catch (error) {
    next(error);
  }
};
