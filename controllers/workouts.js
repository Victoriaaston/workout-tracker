const Workout = require("../models/workout")

module.exports = {
    index, 
    new: newWorkout, 

}

function index(req, res) {
    res.render("workouts/index")
}

function newWorkout(req, res) {
    res.render("workouts/new")
}