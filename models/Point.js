//dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema

const PointSchema = new Schema({
    point: {
        type: Number
        },
    ground_surface: {
        type: String,
        },
    soil_moisture_percentage: {
        type: Number
    },
    soil_moisture_depth_cm: {
        type: Number
    },
    shrub_density: {
        type: Number
    },
    shrub_density_detail: [
        {
            taxon: {
                type: String
            },
            stem_count: {
                type: Number
            }
        }
    ],
    canopy_score: {
        type: Number
    },
    canopy_taxa: {
        type: [String]
    },
    hit_one: {
        type: String
    },
    hit_two: {
        type: String
    }    
});

const Point = mongoose.model("Point", PointSchema);

module.exports = Point;