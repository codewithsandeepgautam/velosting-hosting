const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BusinessInquirySchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    businessEmail: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true });
const BusinessInquiry = mongoose.model('BusinessInquiry', BusinessInquirySchema);
module.exports = BusinessInquiry;