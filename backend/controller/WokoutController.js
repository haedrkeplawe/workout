const WorkoutModel = require("../model/Workout")

module.exports.saveWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const user_id = req.user._id
        const workout = await WorkoutModel.create({ title, load, reps, user_id })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports.getAllWorkout = async (req, res) => {
    try {
        const user_id = req.user._id
        const workouts = await WorkoutModel.find({ user_id }).sort({ createdAt: -1 })
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports.getOneWorkout = async (req, res) => {
    try {
        const { id } = req.params
        const workout = await WorkoutModel.findById(id)
        if (!workout) {
            res.status(404).json({ error: "no such workout" })
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(404).json({ error: "no such workout" })
    }
}
module.exports.deleteWorkout = async (req, res) => {
    try {
        const { id } = req.params
        const workout = await WorkoutModel.findByIdAndDelete({ _id: id })
        if (!workout) {
            res.status(404).json({ error: "no such workout" })
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(404).json({ error: "no such workout" })
    }
}
module.exports.updateWorkout = async (req, res) => {
    try {
        const { id } = req.params
        const workout = await WorkoutModel.findByIdAndUpdate({ _id: id }, { ...req.body })
        if (!workout) {
            res.status(404).json({ error: "no such workout" })
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(404).json({ error: "no such workout" })
    }
}