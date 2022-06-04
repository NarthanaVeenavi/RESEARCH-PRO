const Supervisor = require("../modal/supervisor");

//send request to a supervisor
const sendSupervisorRequest = async (req, res) => {
  if (req.body) {
    const sup = new Supervisor(req.body);
    await sup.save().then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

//get all supervisors request
const getAllsupervisorRequest = async (req, res) => {
  await Supervisor.find().then((data) => {res.status(200).send(data);})
    .catch((error) => {
      res.send(error);
    });
};

//update status of request 
const updateReqStatus = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Supervisor.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send(data);})
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

module.exports = {sendSupervisorRequest, getAllsupervisorRequest, updateReqStatus};

