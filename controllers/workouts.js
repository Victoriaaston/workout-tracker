const Workout = require("../models/workout")

module.exports = {
    showOne, 
    showAll,
    index, 
    new: newWorkout, 
    create,
    show, 
}

function showOne(){
    
}

function showAll() {

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
    // Workout.filter(req.params.day, function(err, workout) {
    //     console.log(req.params.day)
        res.render("workouts/show", {title: "workout days", Workout})
    // })
}