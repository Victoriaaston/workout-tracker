const Workout = require("../models/workout")

module.exports = {
    index, 
    new: newWorkout, 
    create,
    show, 
}


function index(req, res) {
    Workout.find({}, function(err, workouts) {
        res.render("workouts/index", {workouts})
    })
}

function newWorkout(req, res) {
    res.render("workouts/new", {title: "Add Workout", Workout})
}

function create(req, res) {
    const workout = new Workout(req.body)
    workout.save(function(err) {
        if (err) return res.redirect("workouts/new")
        res.redirect("workouts")
    })
}

function show(req, res) {
    console.log(req.params)
    Workout.find({day: req.params.day}, function(err, workouts) {
        console.log(workouts)
        res.render("workouts/show", {title: `Day ${workouts.day}`, workouts})
    })
}
