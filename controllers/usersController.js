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
                res.json("this user already exists")
            }else{
                console.log(req.body.password)
                //HASH PASSWORD
                bcrypt.genSalt(10, (err, salt) => 
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if(err) throw err;
                        //set pw to hashed
                        req.body.password = hash;
                        //submit the user registrant data to the database
                        db.User
                            .create(req.body)
                            .then(function(users){
                                res.json(users)
                            })
                            .catch(err => res.status(422).json(err));
                }))
            }
        })
    }
}