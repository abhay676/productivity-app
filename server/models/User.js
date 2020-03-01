const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { ErrorHandler } = require("../utils/ErrorHandler");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.virtual("projects", {
  ref: "Project",
  localField: "_id",
  foreignField: "owner",
});

userSchema.pre("save", async function () {
  const user = this;
  const hashPassword = await bcrypt.hash(user.password, 8);
  user.password = hashPassword;
});

// adding JWT token
userSchema.methods.generateToken = async function () {
  const user = this;
  const token = await jwt.sign(
    /* eslint no-underscore-dangle: 0 */
    { _id: user._id.toString() },
    process.env.JWT_SECRET,
  );
  user.token = token;
};

const User = mongoose.model("User", userSchema);
userSchema.statics.findByEmail = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new ErrorHandler(404, "Email is not registered");
  }

  const hashPassword = await bcrypt.compare(password, user.password);
  if (!hashPassword) {
    throw new ErrorHandler(404, "Password don't match");
  }
  return user;
};

module.exports = User;
