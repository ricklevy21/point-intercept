//dependencies
const router = require("express").Router();
const pointsController = require("../../controllers/pointsController")


//Matches with "/api/points"
router.route("/")
    .get(pointsController.findAll)
    .post(pointsController.create)

module.exports = router
