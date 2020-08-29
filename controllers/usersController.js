//dependencies
const db = require("../models");
const bcrypt = require('bcryptjs')


module.exports = {

//method to register / create a new user
create: function(req, res) {
    console.log(req.body)
    //make sure the user doesnt already exsit
    db.User
        .findOne({email: req.body.email})
        .then(user => {
            if(user) {
                //User already exists
                console.log("user already exists")
                res.json("this user already exists")
            }else{
                db.User
                    .create(req.body)
                    .then(function(users){
                        res.json(users)
                    })
                    .catch(err => res.status(422).json(err));
            }
        })
    }
}