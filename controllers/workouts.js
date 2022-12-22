const Workout = require("../models/workout")

module.exports = {
    index, 
}

function index(req, res) {
    res.render("workouts/index")
}