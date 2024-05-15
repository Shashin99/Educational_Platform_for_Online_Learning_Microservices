const express = require("express");
const cors = require("cors");
const expressSession = require("express-session");
const proxy = require("express-http-proxy");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());
app.set("trust proxy", 1);

const sessSettings = expressSession({
    secret: "oursecret",
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false, // For development, you can set it to true in production if using HTTPS
        maxAge: 360000,
    },
});
app.use(sessSettings);

// Proxy middleware
app.use("/apiuser", proxy("http://localhost:4001"));
app.use("/apilearner", proxy("http://localhost:4002"));
app.use("/apienroll", proxy("http://localhost:4003"));
app.use("/apicourse", proxy("http://localhost:4004"));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Gateway Server is running!" });
});
app.listen(4000, "0.0.0.0", () => console.log("Server started at : 4000"));
