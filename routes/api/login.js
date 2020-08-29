//dependencies
const router = require("express").Router();
const usersController = require("../../controllers/usersController")


///THIS ISNT WORKING


//Matches with "/api/login"
router.route("/")
    .post(usersController.create)

module.exports = router



// //dependencies
// const router = require("express").Router();
// const passport = require('passport')


// //method to handle login
    // router.route("/")
    // .post((req, res, next) => {
    //     passport.authenticate('local', {
    //         successRedirect:'/',
    //         failureRedirect: '/login'
    //     })(req, res, next)
    // })

// module.exports = router