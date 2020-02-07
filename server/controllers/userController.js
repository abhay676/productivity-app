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
    const e = error;
    delete e.stack;
    next(e);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(email, password);
    res.send(user);
  } catch (error) {
    const e = error;
    delete e.stack;
    next(e);
  }
};
