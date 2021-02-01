//dependencies
const router = require("express").Router();
const editController = require("../../controllers/editController")


//Matches with "/api/edit/:id"
router.route("/:id")
    .patch(editController.findOneAndUpdate)

module.exports = router
