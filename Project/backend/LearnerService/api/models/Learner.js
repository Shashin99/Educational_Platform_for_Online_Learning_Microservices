const mongoose = require("mongoose");

var Learner = mongoose.model("Learner", {
    course_id: {
        type: String,
        required: true,
    },

    user_id: {
        type: String,
        required: true,
    },

    note1: {
        type: Boolean,
        required: false,
    },

    note2: {
        type: Boolean,
        default: false,
    },

    note3: {
        type: Boolean,
        default: false,
    },

    note4: {
        type: Boolean,
        default: false,
    },

    note5: {
        type: Boolean,
        default: false,
    },
});

module.exports = { Learner };
