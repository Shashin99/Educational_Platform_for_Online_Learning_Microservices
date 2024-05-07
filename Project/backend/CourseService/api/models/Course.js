const mongoose = require("mongoose");

var Course = mongoose.model("Course", {
    note1: {
        type: String,
        required: true,
    },

    note2: {
        type: String,
        default: "",
    },

    note3: {
        type: String,
        default: "",
    },

    note4: {
        type: String,
        default: "",
    },

    note5: {
        type: String,
        default: "",
    },

    video_link: {
        type: String,
        required: true,
    },

    quiz_details: {
        type: String,
        required: true,
    },
});

module.exports = { Course };
