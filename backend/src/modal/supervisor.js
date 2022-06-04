const mongoose = require("mongoose");

const SupervisorSchema = new mongoose.Schema({
  grpID: { 
    type: String, 
    required: true 
  },
  grpName: { 
    type: String, 
    required: true 
  },
  area: { 
    type: String, 
    required: true 
  },
  supervisorName: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    required: true 
  },
});

const Supervisor = mongoose.model("supervisor", SupervisorSchema);
module.exports = Supervisor;
