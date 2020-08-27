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
            .then(function(transects) {
                return db.Project.findOneAndUpdate({_id:projectID}, { $push: { transects: transects._id } }, { new: true })
            })
            .then(function(projectObj) {
                res.json(projectObj)
            })
            .catch(err => res.status(400).json(err));
    },
    findById: function(req, res) {
        db.Transect
            .findById(req.params.id)
            .then(transect => res.status(200).json(transect))
            .catch(err => res.status(404).json(err));
    }
}