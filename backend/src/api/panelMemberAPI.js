const express = require("express");
const router = express.Router();
const PanelMembersController = require("../controller/panelMember");

module.exports = function () {
  router.post("/add", PanelMembersController.assignPanelMember);
  router.get("/", PanelMembersController.getAllPanelMemberDetails);
  return router;
};
