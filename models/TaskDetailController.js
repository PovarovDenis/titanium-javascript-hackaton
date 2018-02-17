const mongoose = require('mongoose');

const DetailsSchema = new mongoose.Schema({
    TaskDetails: String,
    name: String
});
const Details = mongoose.model('Details', DetailsSchema);
module.exports = Details;