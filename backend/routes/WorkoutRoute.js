const express = require("express")
const router = express.Router()
const { saveWorkout, getAllWorkout, getOneWorkout, deleteWorkout, updateWorkout } = require("../controller/WokoutController")
const requireAuth = require("../middleware/requireAuth")

// require auth for all workout routes
router.use(requireAuth)

router.post("/", saveWorkout)
router.get("/", getAllWorkout)
router.get("/:id", getOneWorkout)
router.delete("/:id", deleteWorkout)
router.patch("/:id", updateWorkout)


module.exports = router