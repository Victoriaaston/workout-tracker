const workout = require("../models/workout")
const Workout = require("../models/workout")

module.exports = {
    index, 
    new: newWorkout, 
    create,
    show, 
    delete: deleteWorkout,
    edit,
    update
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
    Workout.find({day: req.params.day}, function(err, workouts) {
        res.render("workouts/show", {title: `Day ${req.params.day}`, workouts})
    })
}

function deleteWorkout (req, res, next) {
    Workout.findById(req.params.id).then(function(workout) {
        workout.remove()
        res.redirect("/workouts")
    }).catch(function(err) {
        return next(err)
    })
}

function edit(req, res) {
    res.render("workouts/update", {Workout})
}

function update(req, res, next) {
    const name = Workout.name
    Workout.findById(req.params.id) 
        .populate(name)
        .exec(function(err, workout) {
            workout.update(req.body)
        })
        workout.save(function(err) {
            if (err) return res.redirect("/workouts")
            res.redirect("/workouts")
        }).catch(function(err) {
        return next(err)
    })
}