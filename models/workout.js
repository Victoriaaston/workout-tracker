const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: String, 
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    description: String,
    name: String,
    reps: Number, 
    sets: Number, 
    muscleGroup: String
})

module.exports = mongoose.model('Workout', workoutSchema);