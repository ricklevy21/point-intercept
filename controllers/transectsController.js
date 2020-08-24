//dependencies
const db = require("../models");


//CRUD methods for transect level data

//Method to get all of the transects from the db
module.exports = {
    findAll: function(req, res) {
        db.Transect
            .find({})
            .then(function(transects) {
                res.json(transects)
            })
            .catch(err => res.status(422).json(err));
    },


//Method to add a transect, which also adds the transect ID to the specified project via projectID
    create: function(req, res) {
        const projectID = req.body.projectID

        db.Transect
            .create(req.body)
            .then(function(transects){
                db.Project.findOneAndUpdate({_id:projectID}, { $push: { transects: transects._id } }, { new: true })
                .then(function(projects){
                    res.json(transects)
                })
                .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err));
    }
}