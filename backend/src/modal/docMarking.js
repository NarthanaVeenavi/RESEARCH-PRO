const mongoose = require("mongoose");

const DocMarkingSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  totMarks: { 
    type: String, 
    required: true 
  },
  marking1: { 
    type: String, 
    required: true 
  },
  mark1: { 
    type: String, 
    required: true 
  },
  marking2: { 
    type: String, 
    required: true 
  },
  mark2: { 
    type: String, 
    required: true 
  },
  marking3: { 
    type: String, 
    required: true 
  },
  mark3: { 
    type: String, 
    required: true 
  },
  marking4: { 
    type: String, 
    required: true 
  },
  mark4: { 
    type: String, 
    required: true 
  },
  marking5: { 
    type: String, 
    required: true 
  },
  mark5: { 
    type: String, 
    required: true 
  }
});

const DocMarking = mongoose.model("docmarking",DocMarkingSchema);
module.exports = DocMarking;
