const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/prod", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});
