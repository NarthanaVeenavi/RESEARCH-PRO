const express = require("express");
const router = express.Router();
const AdminController = require("../controller/admin");

module.exports = function () {
  router.get("/admins/:email", AdminController.getProfile);
  router.put("/update/:id", AdminController.updateAdmin);
  router.delete("/delete/:id", AdminController.deleteAdmin);
  return router;
};
