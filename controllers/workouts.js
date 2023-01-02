const Workout = require("../models/workout")

module.exports = {
    index, 
    new: newWorkout, 
    create,
    show, 
}

function index(req, res) {
    res.render("workouts/index")
}

function newWorkout(req, res) {
    res.render("workouts/new", {title: "Add Workout", Workout})
}

function create(req, res) {
    const workout = new Workout(req.body)
    workout.save(function(err) {
        if (err) return res.redirect("/workouts/new")
        res.redirect("workouts/show")
    })
}

function show(req, res) {
    Workout.filter(req.params.day, function(err, workout) {
        console.log(req.params.day)
        res.render("workouts/show", {title: "workout days", workout})
    })
}