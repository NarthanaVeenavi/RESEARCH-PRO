const express = require("express");
const router = express.Router();
const StudentGroupController = require("../controller/studentGroups");

module.exports = function () {
  router.post("/register", StudentGroupController.registerGroup);
  router.get("/", StudentGroupController.getAllGroupDetails);
  return router;
};
