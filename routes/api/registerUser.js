//dependencies
const router = require("express").Router();
const userController = require("../../controllers/userController")

//Matches with "/api/register"
router.route("/")
    .post(userController.create)

module.exports = router