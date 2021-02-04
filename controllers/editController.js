//dependencies
const db = require("../models");
const async = require('async');

//trying to figure out a way to update multiple documents in 2 different collections, using data sent from the client in the form of an array of objects.
//Each object corresponds to a single document in each collection

//below is a solution from stackoverflow that is not working: https://stackoverflow.com/questions/43229139/node-js-mongoose-update-query-inside-for-or-foreach-loop-is-it-possible/43230834
//tried looping through the array of objects from the client and doin tthe update once for each object, but it seems that is not kosher


module.exports ={
    //method to update a value within the points colleciton
    update: function(req, res) {
        const newData = req.body.updatedData
        //console.log("inside findOneandUpdate", newData)
        async.eachSeries(newData, function updateObject (obj, done) {
            console.log(obj)
            db.Transect
            .updateOne({transect_id : obj.transect_id},
                    {
                        transect: obj.transect,
                        date: obj.date,
                        latitude: obj.latitude,
                        longitude: obj.longitude,
                        elevation: obj.elevation,
                        crew: obj.crew,
                        additionalSpecies: obj.additionalSpecies
                    }, done
                )
        db.Point
            .updateOne({point_id: obj.point_id},
                    {
                        point: obj.point,
                        ground_surface: obj.ground_surface,
                        soil_moisture_percentage: obj.soil_moisture_percentage,
                        shrub_density_detail: obj.shrub_density_detail,
                        canopy_score: obj.canopy_score,
                        canopy_taxa: obj.canopy_taxa,
                        hit_one: obj.hit_one,
                        hit_two: obj.hit_two
                    }, done
                )
        }, function allDone (err){
            console.log("all done")
        })
        
    //     .then(function(data){
    //         res.json(data)
    //     })
    //     .catch(err => res.status(422).json(err));
    // }
    
    }
}




        // }
        // db.Transect
        //     .updateOne({transect_id : newData[i].transect_id},
        //             {
        //                 transect: newData[i].transect,
        //                 date: newData[i].date,
        //                 latitude: newData[i].latitude,
        //                 longitude: newData[i].longitude,
        //                 elevation: newData[i].elevation,
        //                 crew: newData[i].crew,
        //                 additionalSpecies: newData[i].additionalSpecies
        //             }
        //         )
        // db.Point
        //     .updateOne({point_id: newData[i].point_id},
        //             {
        //                 point: newData[i].point,
        //                 ground_surface: newData[i].ground_surface,
        //                 soil_moisture_percentage: newData[i].soil_moisture_percentage,
        //                 shrub_density_detail: newData[i].shrub_density_detail,
        //                 canopy_score: newData[i].canopy_score,
        //                 canopy_taxa: newData[i].canopy_taxa,
        //                 hit_one: newData[i].hit_one,
        //                 hit_two: newData[i].hit_two
        //             }
        //         )