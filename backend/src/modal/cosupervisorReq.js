const mongoose = require("mongoose");

const CosupervisorSchema = new mongoose.Schema({
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
  coSupervisorName: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    required: true 
  },
});

const CoSupervisor = mongoose.model("cosupervisor", CosupervisorSchema);
module.exports = CoSupervisor;
