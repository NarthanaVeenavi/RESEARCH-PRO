const UploadDocument = require("../modal/uploadDoc");

//upload document
const uploadDocument = async (req, res) => {
  if (req.body) {
    const uploadDocument = new UploadDocument(req.body);
    await uploadDocument.save().then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

//get uploaded document
const getUploadDocument = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
    await UploadDocument.findById(req.params.id).then((data) => {res.status(200).send({ data });})
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//get all uploaded document
const getAllUploadDocuments = async (req, res) => {
  await UploadDocument.find().then((data) => {res.status(200).send(data);})
    .catch((error) => {
      res.send(error);
    });
};

//update uploaded document
const updateUploadDocument = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await UploadDocument.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send(data);})
      .catch((err) => {
        res.send(err);
      });
  }
};

//delete uploaded document
const deleteUploadDocument = async (req, res) => {
  await UploadDocument.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Removed Document" });})
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {uploadDocument, getUploadDocument, getAllUploadDocuments, updateUploadDocument, deleteUploadDocument};