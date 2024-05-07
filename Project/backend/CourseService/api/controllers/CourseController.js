const express = require("express");
var { Course } = require("../models/Course");

exports.getAll = async (req, res) => {
    Course.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(JSON.stringify(err, undefined, 2));
        }
    });
};

exports.getId = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id)
    }

    Course.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log(JSON.stringify(err, undefined, 2))
        }
    })
}

exports.newCourse = async (req, res) => {
    var newRecord = new Course({
        note1: req.body.note1,
        note2: req.body.note2,
        note3: req.body.note3,
        note4: req.body.note4,
        note5: req.body.note5,
        video_link: req.body.video_link,
        quiz_details: req.body.quiz_details,
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
