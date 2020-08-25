//dependencies
const router = require("express").Router();
const transectsController = require("../../controllers/transectsController")

//Matches with "/api/transects"
router.route("/")
    .get(transectsController.findAll)
    .post(transectsController.create)


// //Matches with "/api/transects/:id"
// router.route("/:id")
//     .get(transectController.findById)

module.exports = router
