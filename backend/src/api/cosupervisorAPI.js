const express = require("express");
const router = express.Router();
const CoSupervisorController = require("../controller/cosupervisorReq");

module.exports = function () {
  router.post("/request", CoSupervisorController.requestCosupervisor);
  router.get("/", CoSupervisorController.getAllCoSupervisorReqs);
  router.put("/update/:id", CoSupervisorController.updateStatus);
  return router;
};
