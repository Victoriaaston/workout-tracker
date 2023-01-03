var express = require('express');
var router = express.Router();
const workoutCtrl = require("../controllers/workouts")

/* GET users listing. */
router.get('/', workoutCtrl.index)

router.get("/new", workoutCtrl.new)

router.post("/", workoutCtrl.create)

router.get("/", workoutCtrl.show)


module.exports = router;
