var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/workouts',
    failureRedirect : '/workouts'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/workouts');
  });
});

//only the logged in user can view their posts 
router.get('/posts/:id',
  passport.authenticate('oauth2', { session: false }),
  async (req, res) => {
    try {
      // Get the user's ID from the access token
      const userId = req.user.id;
      
      // Get the post from the database
      const workout = await Workout.findById(req.params.id);
      
      // Check if the user's ID matches the ID of the user who created the post
      if (workout.userId === userId) {
        // If it does, display the post to the user
        res.send(workout);
      } else {
        // If not, redirect the user or display an error message
        res.status(401).send('You are not authorized to view this post');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);




module.exports = router;
