const router = require("express").Router();
const projectRoutes = require("./projects");
const transectRoutes = require("./transects");


//Project routes
router.use("/api/projects", projectRoutes);
router.use("/api/transects", transectRoutes);


module.exports = router;
