const DocumentMarking = require("../modal/docMarking");

//create Marking Schemes
const addMarking = async (req, res) => {
  if (req.body) {
    const documentMarking = new DocumentMarking(req.body);
    await documentMarking.save().then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(500).send(err));
  }
};

//retreive all marking schemes
const getAllMarkings = async (req, res) => {
  await DocumentMarking.find().then((data) => {res.status(200).send(data);})
    .catch((err) => {
      res.status(500).send(err);
    });
};

//get single marking
const getMarking = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
    await DocumentMarking.findById(req.params.id).then((data) => {res.status(200).send({ data });})
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

module.exports = {addMarking, getAllMarkings, getMarking};
