const router = require("express").Router();
const path = require("path");

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/stats.html"));
  });
  
  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"));
  });
  
  module.exports = router;