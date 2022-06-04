const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubTypeSchema = new Schema({
  link: { 
    type: String, 
    required: true 
  },
  submissionType: { 
    type: String, 
    required: true 
  },
  date: { 
    type: String, 
    required: true 
  },
  time: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    required: true 
  },
});

const SubmissionType = mongoose.model("subtype", SubTypeSchema);
module.exports = SubmissionType;
