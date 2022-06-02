const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    userId: {
        type: String,
        required: true,
    }
});

const Staff = mongoose.model("staff", staffSchema);
module.exports = Staff;