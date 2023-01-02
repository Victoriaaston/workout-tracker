const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String, 
  workout: [{type: Schema.Types.ObjectId, ref: "Workout"}]
}, {
  timestamps: true
})


module.exports = mongoose.model('User', userSchema);
