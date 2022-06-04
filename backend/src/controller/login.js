const Login = require("../modal/login");

//add user
const addUser = async (req, res) => {
  if (req.body) {
    const login = new Login(req.body);
    await login.save().then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

//user login
const userLogin = async (req, res) => {
  await Login.findOne({ email: req.params.email })
    .then((data) => {res.status(200).send({ data })})
    .catch((err) => {
      res.status(500).send(err);
    });
};

//delete user
const deleteUser = async (req, res) => {
  await Login.findByIdAndDelete(req.params.id)
    .then(() => {res.status(200).send({ status: "User Deleted" })})
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {addUser, userLogin, deleteUser};
