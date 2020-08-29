const router = require("express").Router();
const projectRoutes = require("./projects");
const transectRoutes = require("./transects");
const pointRoutes = require("./points")
const userRoutes = require("./users")
const loginRoutes = require("./login")


//Project routes
router.use("/api/projects", projectRoutes);
router.use("/api/transects", transectRoutes);
router.use("/api/points", pointRoutes);
router.use("/api/register", userRoutes)
router.use("/api/login", loginRoutes)



module.exports = router;
