//dependencies
const db = require("../models");


module.exports = {

//method to register / create a new user
create: function(req, res) {
    db.User
        .create(req.body)
        .then(function(users){
            res.json(users)
        })
        .catch(err => res.status(422).json(err));
    }
}