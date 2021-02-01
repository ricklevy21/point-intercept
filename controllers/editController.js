//dependencies
const db = require("../models");

module.exports ={
    //method to update a value within the points colleciton
    findOneAndUpdate: function(req, res) {
        //const pointID = req.body.point_id
        console.log("inside findOneandUpdate", req.body)
        //console.log("inside findOneandUpdate", pointID)
        // db.Point
        //     .findByIdAndUpdate(pointID, )
    }

}

// findOneAndUpdate: function(req, res) {
//     const transectID = req.body.transectID
//     console.log("inside findOneandUpdate",transectID)
//     console.log(req.body.additionalSpecies)
//     db.Transect
//         .findByIdAndUpdate(transectID, {additionalSpecies: req.body.additionalSpecies})
//         .then(function(transects){
//             res.json(transects)
//         })
//         .catch(err => res.status(422).json(err));
// }