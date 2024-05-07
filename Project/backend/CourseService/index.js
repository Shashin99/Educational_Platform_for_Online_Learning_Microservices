require("./configuration/db.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var CourseRoutes = require("./api/routes/Course.js");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.listen(3500, () => console.log("Server started at : 3500"));

app.use("/Course", CourseRoutes);

app.use(express.static("public"));
