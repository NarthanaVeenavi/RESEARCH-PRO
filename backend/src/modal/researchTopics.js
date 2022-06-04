const mongoose = require("mongoose");

const ResearchTopicSchema = new mongoose.Schema({
  grpID: { 
    type: String, 
    required: true 
  },
  grpName: { 
    type: String, 
    required: true 
  },
  supervisorName: { 
    type: String, 
    required: true 
  },
  coSupervisorName: { 
    type: String, 
    required: true 
  },
  topic: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    required: true 
  },
});

const ReasearchTopic = mongoose.model("researchTopic", ResearchTopicSchema);
module.exports = ReasearchTopic;
