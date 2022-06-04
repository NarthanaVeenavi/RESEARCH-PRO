const PanelMember = require("../modal/panelMember");

//assign panel member
const assignPanelMember = async (req, res) => {
  if (req.body) {
    const panel = new PanelMember(req.body);
    await panel.save().then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

//get all panel member details
const getAllPanelMemberDetails = async (req, res) => {
  await PanelMember.find().then((data) => {res.status(200).send(data);})
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {assignPanelMember, getAllPanelMemberDetails};
