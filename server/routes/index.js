const express = require("express");

const route = express.Router();

const Auth = require("../middleware/Auth");

const userController = require("../controllers/userController");
const projectController = require("../controllers/projectController");
const taskController = require("../controllers/taskController");

// Routes

// User-routes
route.post("/login", userController.login);
route.post("/new-user", userController.newUser);

// Projects
route.post("/add-project", Auth, projectController.newProject);
route.put("/update-project/:id", Auth, projectController.updateProject);
route.delete("/delete-project/:id", Auth, projectController.deleteProject);

// Tasks
route.post("/add-task", Auth, taskController.addTask);
route.post("/update-task/:id", Auth, taskController.updateTask);
route.post("/delete-task/:id", Auth, taskController.deleteTask);

module.exports = route;
