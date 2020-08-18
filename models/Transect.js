//dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema

const TransectSchema = new Schema({
    transect: {
        type: String,
        unique: true
        },
    date: {
        type: Date,
        },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    crew: [String],
    points: [
    {
        type: Schema.Types.ObjectId,
        ref: "Point"
    }
    ]
});

const Transect = mongoose.model("Transect", TransectSchema);

module.exports = Transect;