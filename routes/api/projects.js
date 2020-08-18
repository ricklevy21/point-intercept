//dependencies
const router = require("express").Router();
const projectController = require("../../controllers/projectsController")

//Matches with "/api/projects"
router.route("/")
    .get(projectController.findAll)
    .post(projectController.create)


// //Matches with "/api/projects/:id"
// router
//     .route("/:id")
//     .get(projectController.findById)

module.exports = router
