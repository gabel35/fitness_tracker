const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
