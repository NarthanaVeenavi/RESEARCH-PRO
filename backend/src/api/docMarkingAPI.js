const express = require("express");
const router = express.Router();
const DocMarkingController = require("../controller/docMarking");

module.exports = function () {
  router.post("/create", DocMarkingController.addMarking);
  router.get("/", DocMarkingController.getAllMarkings);
  router.get("/:id", DocMarkingController.getMarking);
  return router;
};
