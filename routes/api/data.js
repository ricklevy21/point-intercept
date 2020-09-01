//dependencies
const router = require("express").Router();
const projectsController = require("../../controllers/projectsController")
//const transectsController = require("../../controllers/transectsController")


//Matches with "/api/data/:id"
router.route("/:id")
    .get(projectsController.projectData)

module.exports = router
