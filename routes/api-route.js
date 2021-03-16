const Workout = require("../models/workout");

router.get("/api/workout", (req, res) => {
    Workout.aggregate({
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration",
            },
        }
    }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;