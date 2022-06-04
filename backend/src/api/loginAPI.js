const express = require("express");
const router = express.Router();
const LoginController = require("../controller/login");

module.exports = function () {
  router.get("/:email", LoginController.userLogin);
  router.post("/add", LoginController.addUser);
  router.delete("/delete/:id", LoginController.deleteUser);

  return router;
};
