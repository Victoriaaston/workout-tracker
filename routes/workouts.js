var express = require('express');
var router = express.Router();
const workoutCtrl = require("../controllers/workouts")
const isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/', workoutCtrl.index)

router.get("/new", isLoggedIn, workoutCtrl.new)

router.post("/", isLoggedIn, workoutCtrl.create)

router.get("/:day", isLoggedIn, workoutCtrl.show)

router.delete("/:id", isLoggedIn, workoutCtrl.delete)

router.get("/:id/edit", isLoggedIn, workoutCtrl.edit)

router.put("/:id", isLoggedIn, workoutCtrl.update)


module.exports = router;
