const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(
    "mongodb+srv://Shashin:Shashin@cluster0.s3wm8gy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log("connection success!");
        } else {
            console.log("connection fail!" + JSON.stringify(err, undefined, 2));
        }
    }
);
