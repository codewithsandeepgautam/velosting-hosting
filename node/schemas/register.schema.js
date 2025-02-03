const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    websiteUrl: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Register = mongoose.model('Register', registerSchema);
module.exports = Register;