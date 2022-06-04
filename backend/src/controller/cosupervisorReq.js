const CoSupervisor = require("../modal/cosupervisorReq");

//Request CoSupervisor
const requestCosupervisor = async (req, res) => {
  if (req.body) {
    const cosupervisor = new CoSupervisor(req.body);
    await cosupervisor.save().then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

//get All Cosupervisor
const getAllCoSupervisorReqs = async (req, res) => {
  await CoSupervisor.find().then((data) => {res.status(200).send(data);})
  .catch((error) => {res.send(error);
  });
};

//Update Req status
const updateStatus = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await CoSupervisor.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send(data);})
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

module.exports = {requestCosupervisor, getAllCoSupervisorReqs, updateStatus};
