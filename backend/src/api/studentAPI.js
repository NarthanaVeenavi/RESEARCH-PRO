const express = require("express");
const router = express.Router();
const StudentController = require("../controller/student");

module.exports = function () {
  router.post("/register", StudentController.registerStudent);
  router.get("/students/:email", StudentController.getprofile);
  router.get("/", StudentController.getAllStudentDetails);
  router.put("/update/:id", StudentController.updateStudent);
  router.delete("/delete/:id", StudentController.deleteStudent);

  return router;
};
