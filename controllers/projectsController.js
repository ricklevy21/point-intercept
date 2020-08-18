const db = require("../models");

//methods

module.exports = {
    findAll: function(req, res) {
        db.Project
            .find({})
            .then(function(projects) {
                console.log(projects)
                res.json(projects)
            })
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Project
            .create(req.body)
            .then(function(projects){
                res.json(projects)
            })
            .catch(err => res.status(422).json(err));
    }
}