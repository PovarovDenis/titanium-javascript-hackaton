const mongoose = require('mongoose');

const DetailsSchema = new mongoose.Schema({
    TaskDetails: String
});
const Details = mongoose.model('Details', DetailsSchema);
module.exports = Details;