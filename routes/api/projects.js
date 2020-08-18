//dependencies
const router = require("express").Router();
const projectsController = require("../../controllers/projectsController")

//Matches with "/api/projects"
router.route("/")
    .get(projectsController.findAll)
    .post(projectsController.create)


// //Matches with "/api/projects/:id"
// router
//     .route("/:id")
//     .get(projectController.findById)

module.exports = router
