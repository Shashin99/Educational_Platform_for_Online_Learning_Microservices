require("./configuration/db")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "*" }))
app.listen(4000, () => console.log("Server started at : 3500"))

app.use(express.static("public"))
