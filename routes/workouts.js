var express = require('express');
var router = express.Router();
const workoutCtrl = require("../controllers/workouts")

/* GET users listing. */
router.get('/', workoutCtrl.index)




module.exports = router;
