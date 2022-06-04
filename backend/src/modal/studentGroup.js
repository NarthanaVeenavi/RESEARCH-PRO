const mongoose = require("mongoose");
const crypto = require("crypto");

const ID = crypto.randomBytes(2).toString("hex");

const StudentGroupSchema = new mongoose.Schema({

  grpID : { 
    type: String, 
    default:ID, 
    required: true
  },
  grpName: { 
    type: String, 
    required: true 
  },
  grpLeaderID: { 
    type: String, 
    required: true 
  },
  grpleaderName: { 
    type: String, 
    required: true 
  },
  grpContactNo: { 
    type: String, 
    required: true 
  },
  grpleaderEmail: { 
    type: String, 
    required: true 
  },
  mem2ID: { 
    type: String, 
    required: true 
  },
  mem2Name: { 
    type: String, 
    required: true 
  },
  mem3ID: { 
    type: String, 
    required: true 
  },
  mem3Name: { 
    type: String, 
    required: true 
  },
  mem4ID: { 
    type: String, 
    required: true 
  },
  mem4Name: { 
    type: String, 
    required: true 
  }
});

const StudentGroup = mongoose.model("group", StudentGroupSchema);
module.exports = StudentGroup;
