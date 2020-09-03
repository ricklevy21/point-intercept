//dependencies
const router = require("express").Router();
const passport = require('passport')


router.route("/login")
    .post(passport.authenticate('local', { 
        successRedirect: '/',
        failureRedirect: '/login' }), function(req,res){
            console.log("success!")
            res.json({
                user: req.user
            })
        }
        );
    
module.exports = router