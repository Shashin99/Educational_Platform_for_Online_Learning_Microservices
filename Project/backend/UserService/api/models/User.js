const mongoose = require("mongoose");

var User = mongoose.model("User", {
    fname: {
        type: String,
        required: true,
    },

    lname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    privilege: {
        type: String,
        enum: ["admin", "instructor", "student"],
        required: true,
    },

    contact_no: {
        type: String,
        required: true,
    },

    active: {
        type: Boolean,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
});

module.exports = { User };
