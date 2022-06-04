const express = require("express");
const router = express.Router();
const StaffController = require("../controller/staff");

module.exports = function () {
  router.post("/register", StaffController.registerStaff);
  router.get("/staffs/:email", StaffController.getprofile);
  router.get("/", StaffController.getAllStaffDetails);
  router.put("/update/:id", StaffController.updateStaff);
  router.delete("/delete/:id", StaffController.deleteStaff);

  return router;
};
