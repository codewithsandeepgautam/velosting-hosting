const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ServerInquirySchema = new Schema({
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
    company: {
        type: String,
        required: true
    },
}, { timestamps: true });
const ServerInquiry = mongoose.model('ServerInquiry', ServerInquirySchema);
module.exports = ServerInquiry;