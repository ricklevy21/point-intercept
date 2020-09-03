const router = require("express").Router();
const projectRoutes = require("./projects");
const transectRoutes = require("./transects");
const pointRoutes = require("./points")
const dataRoutes = require("./data")
const registerRoute = require("./register")

//Project routes
router.use("/api/projects", projectRoutes);
router.use("/api/transects", transectRoutes);
router.use("/api/points", pointRoutes);
router.use("/api/data", dataRoutes);
router.use("/api/register", registerRoute);




module.exports = router;
