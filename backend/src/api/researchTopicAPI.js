const express = require("express");
const router = express.Router();
const ResearchTopicController = require("../controller/researchTopic");

module.exports = function () {
  router.post("/add", ResearchTopicController.topicRegister);
  router.get("/", ResearchTopicController.getAllResearchopics);
  router.put("/update/:id", ResearchTopicController.updateStatus);
  return router;
};
