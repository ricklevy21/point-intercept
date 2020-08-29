const router = require("express").Router();
const projectRoutes = require("./projects");
const transectRoutes = require("./transects");
const pointRoutes = require("./points")
const userRoutes = require("./users")


//Project routes
router.use("/api/projects", projectRoutes);
router.use("/api/transects", transectRoutes);
router.use("/api/points", pointRoutes);
router.use("/api/register", userRoutes)



module.exports = router;
