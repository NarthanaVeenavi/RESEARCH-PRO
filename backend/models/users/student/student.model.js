const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
    },
    groupId: {
        type: String
    },
    batch: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model("student", studentSchema);
module.exports = Student;