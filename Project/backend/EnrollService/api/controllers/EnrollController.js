const express = require("express");
var { Enroll } = require("../models/Enroll");

exports.newEnroll = async (req, res) => {
    var newRecord = new Enroll({
        course_id: req.body.course_id,
        user_id: req.body.user_id,
        date: req.body.date,
        time: req.body.time,
        status: req.body.status,
    });

    newRecord.save((err, docs) => {
        if (!err) {
            console.log(docs);
            res.status(200).send({ data: "success" });
        } else {
            res.status(err);
        }
    });
};
