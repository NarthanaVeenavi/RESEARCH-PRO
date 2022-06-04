const express = require('express');
const router = express.Router();
const UploadSubmissionController = require('../controller/submission');

module.exports = function (){
    router.post('/', UploadSubmissionController.AddSubmission);
    router.get('/:id', UploadSubmissionController.getSubmission);
    router.put('/update/:id', UploadSubmissionController.updateSubmssion);
    router.delete('/delete/:id', UploadSubmissionController.deleteSubmission);
    router.get('/', UploadSubmissionController.getAllSubmissions);
    return router;
}