const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
    type: Number,
    required: true,
};

const locationSchema = new Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: String,
    Image: String,
    Rating: {
        type: Number,
        min: [0],
        max: [10],
        default: 0,
    }, 
    Latitude: requiredNumber,
    Longitude: requiredNumber,
    VisitDate: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = locationSchema;