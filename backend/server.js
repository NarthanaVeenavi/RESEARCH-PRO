const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const DBConnection = async () => {
  await mongoose.connect("mongodb+srv://Amaya_San:AmaSan10026@cluster0.u7jki.mongodb.net/project_research_db?retryWrites=true&w=majority");
  console.log("Database Connected");
};

DBConnection();

app.get("/", (req, res) => {
  res.send("Hello Node!");
});

app.use("/admin", require("./src/api/adminAPI"));

app.use("/login", require("./src/api/loginAPI"));

app.use("/student", require("./src/api/studentAPI"));

app.use("/staff", require("./src/api/staffAPI"));

app.use("/supervisor", require("./src/api/supervisorAPI"));

app.use("/cosupervisor", require("./src/api/cosupervisorAPI"));

app.use("/group", require("./src/api/studentGroupsAPI"));

app.use("/researchTopic", require("./src/api/researchTopicAPI"));

app.use("/submissiontype", require("./src/api/submissionTypeAPI"));

app.use("/uploaddocuments", require("./src/api/uploadDocAPI"));

app.use("/submission", require("./src/api/submissionAPI"));

app.use("/documentmarking", require("./src/api/docMarkingAPI"));

app.use("/presentationmarking", require("./src/api/presentationmarkingAPI"));

app.use("/evaluation", require("./src/api/evaluationAPI"));

app.use("/panelmember", require("./src/api/panelMemberAPI"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
