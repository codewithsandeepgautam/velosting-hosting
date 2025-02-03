const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
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
    message: {
        type: String,
    },
}, { timestamps: true });
const Inquiry = mongoose.model('Inquiry', InquirySchema);
module.exports = Inquiry;