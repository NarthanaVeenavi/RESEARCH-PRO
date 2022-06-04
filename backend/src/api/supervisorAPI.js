const express = require("express");
const router = express.Router();
const SupervisorController = require("../controller/supervisor");

module.exports = function () {
  router.post("/request", SupervisorController.sendSupervisorRequest);
  router.get("/", SupervisorController.getAllsupervisorRequest);
  router.put("/update/:id", SupervisorController.updateReqStatus);
  return router;
};
