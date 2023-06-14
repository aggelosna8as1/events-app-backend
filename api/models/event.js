const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Category: String,
    eventname: String,
    artist: String,
    data: Number,
    city: String,
    place: String,
    Address: String,
    time: Number,
    price: Number,
    tickets: Number,
    Image: String
});

module.exports = mongoose.model('Event', eventSchema);