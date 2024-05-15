const mongoose = require("mongoose");

var Enroll = mongoose.model("Enroll", {
    course_id: {
        type: String,
        required: true,
    },

    user_id: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    time: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        enum: ["completed", "inprogress"],
        required: true,
    },
});

module.exports = { Enroll };
