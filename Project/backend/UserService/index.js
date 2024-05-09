require("./configuration/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var UserRoutes = require("./api/routes/User");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.listen(4001, () => console.log("Server started at : 4001"));

app.use("/User", UserRoutes);

app.use(express.static("public"));
