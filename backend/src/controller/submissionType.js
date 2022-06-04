const SubmissionType = require("../modal/submissionType");

const createSubmissionType = async (req, res) => {
  if (req.body) {
    const SubType = new SubmissionType(req.body);
    await SubType.save().then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getSubmissionType = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
    await SubmissionType.findById(req.params.id).then((data) => {res.status(200).send({ data });})
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

const getAllSubmissionTypes = async (req, res) => {
  await SubmissionType.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const updateSubmissionType = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await SubmissionType.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send(data);})
      .catch((err) => {
        res.send(err);
      });
  }
};

const deleteSubmissionType = async (req, res) => {
  await SubmissionType.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Removed Submission type" });})
  .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {createSubmissionType, getSubmissionType, getAllSubmissionTypes, updateSubmissionType, deleteSubmissionType};
