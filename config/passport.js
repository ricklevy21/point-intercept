//dependencies
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//load the user model
const db = require ("../models")

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            //match user
            db.User.findOne({email: email})
            .then(user => {
                if(!user){
                    return done(null, false, { message: 'this email is not registered' })
                }
                //match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;
                    if(isMatch) {
                        return done(null, user)
                    }else {
                        return done(null, false, { message: 'password incorrect' })
                    }
                })
            })
            .catch(err => console.log(err))
        })
    )

    //serialize and deserialize user
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
    passport.deserializeUser((id, done) => {
        db.User.findById(id, (err, user) => {
          done(err, user);
        });
      });    
}