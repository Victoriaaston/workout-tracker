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
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar
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
    Workout.findById(req.params.id).then(function (workout) {
    res.render("workouts/update", {workout})
 })
}

async function update(req, res, next) {
    try{
    const filter = { _id: req.params.id };
        let workout = await Workout.findOneAndUpdate(filter, req.body, {
            upsert: true
        });
        await workout.save((err) => {
            return res.redirect(`/workouts/${workout.day}`)
        })
    
    
    } catch{(err)=>{
    console.warn(err.message)
    
    }
    
    }
        
    }
