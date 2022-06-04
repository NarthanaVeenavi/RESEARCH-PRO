const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubmissionSchema = new Schema({
    grpId: {
        type: String, 
        required: true
    },
    submissionType: {
        type: String, 
        required: true
    },
    file: {
        type: String, 
        required: true
    }
    },
    { timestamps: true }
);

const Submission = mongoose.model("Submission", SubmissionSchema);
module.exports = Submission;

