//dependencies
const router = require("express").Router();

//Matches with "/api/points"
router.route("/")
    .get(pointController.findAll)
    .post(pointController.create)


//Matches with "/api/points/:id"
router
    .route("/:id")
    .get(pointController.findById)

module.exports = router
