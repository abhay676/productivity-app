const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trime: true,
      required: true,
      unique: true
    },
    deadLine: {
      type: Date
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Virtual tasks field
projectSchema.virtual("tasks", {
  ref: "Tasks",
  localField: "_id",
  foreignField: "projectId"
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
