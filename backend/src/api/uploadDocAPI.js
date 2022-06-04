const express = require("express");
const router = express.Router();
const UploadDocumentController = require("../controller/uploadDoc");

module.exports = function () {
  router.post("/", UploadDocumentController.uploadDocument);
  router.get("/:id", UploadDocumentController.getUploadDocument);
  router.put("/update/:id", UploadDocumentController.updateUploadDocument);
  router.delete("/delete/:id", UploadDocumentController.deleteUploadDocument);
  router.get("/", UploadDocumentController.getAllUploadDocuments);
  return router;
};
