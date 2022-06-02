const mongoose = require("mongoose");

let mongoDB;
const URL = "mongodb+srv://Hansaka:1998@researchmanagementtool.bp2cy.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    mongoDB = await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoBD Connection Success!!');
    })
    .catch ((error) => {
        console.log('Database Error: ' + error.message);
        process.exit(1);
    })
    return mongoDB;
};

module.exports = connectDB;