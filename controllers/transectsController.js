const db = require("../models");

//methods
//not set up yet
module.exports = {
    findAll: function(req, res) {
        db.Transect
            .find({})
            .then(function(projects) {
                console.log(projects)
                res.json(projects)
            })
            .catch(err => res.status(422).json(err));
    },


//working on this
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