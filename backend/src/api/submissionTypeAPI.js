const express = require("express");
const router = express.Router();
const SubmissionTypeController = require("../controller/submissionType");

module.exports = function () {
  router.post("/add", SubmissionTypeController.createSubmissionType);
  router.get("/:id", SubmissionTypeController.getSubmissionType);
  router.put("/update/:id", SubmissionTypeController.updateSubmissionType);
  router.delete("/delete/:id", SubmissionTypeController.deleteSubmissionType);
  router.get("/", SubmissionTypeController.getAllSubmissionTypes);
  return router;
};
