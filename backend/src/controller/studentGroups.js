const Group = require("../modal/studentGroup");

const registerGroup = async (req, res) => {
  if (req.body) {
    const group = new Group(req.body);
    await group.save().then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getAllGroupDetails = async (req, res) => {
  await Group.find().then((data) => {res.status(200).send(data)})
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {registerGroup, getAllGroupDetails};
