//dependencies
const db = require("../models");
const async = require('async');

//trying to figure out a way to update multiple documents in 2 different collections, using data sent from the client in the form of an array of objects.
//Each object corresponds to a single document in each collection

//tried looping through the array of objects from the client and doing the update once for each object, but I've found out that this is not kosher


module.exports ={
    //method to update a value within the points colleciton
    update: function(req, res) {
        const newData = req.body.updatedData
        //console.log("inside findOneandUpdate", newData)
        for (var i = 0; i < newData.length; i++){
            db.Transect
                .updateOne({transect_id : newData[i].transect_id},
                        {
                            transect: newData[i].transect,
                            date: newData[i].date,
                            latitude: newData[i].latitude,
                            longitude: newData[i].longitude,
                            elevation: newData[i].elevation,
                            crew: newData[i].crew,
                            additionalSpecies: newData[i].additionalSpecies
                        }
                    )
            db.Point
                .updateOne({point_id: newData[i].point_id},
                        {
                            point: newData[i].point,
                            ground_surface: newData[i].ground_surface,
                            soil_moisture_percentage: newData[i].soil_moisture_percentage,
                            shrub_density_detail: newData[i].shrub_density_detail,
                            canopy_score: newData[i].canopy_score,
                            canopy_taxa: newData[i].canopy_taxa,
                            hit_one: newData[i].hit_one,
                            hit_two: newData[i].hit_two
                        }
                    )

                    .then(function(data){
                        res.json(data)
                    })
                    .catch(err => res.status(422).json(err));
                }
        }
    
    }