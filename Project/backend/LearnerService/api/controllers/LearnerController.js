const express = require("express");
var { Learner } = require("../models/Learner");
var { Enroll } = require("../models/Enroll");

exports.getAll = async (req, res) => {
    Learner.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(JSON.stringify(err, undefined, 2));
        }
    });
};

exports.getId = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
    }

    Learner.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(JSON.stringify(err, undefined, 2));
        }
    });
};

exports.newLearner = async (req, res) => {
    let lFound = await Learner.findOne({
        course_id: req.body.course_id,
        user_id: req.body.user_id,
    });
    if (lFound) {
        if (req.body.note1 == true) {
            var updateRecords = {
                course_id: req.body.course_id,
                user_id: req.body.user_id,
                note1: req.body.note1,
            };
        } else if (req.body.note2 == true) {
            var updateRecords = {
                course_id: req.body.course_id,
                user_id: req.body.user_id,
                note2: req.body.note2,
            };
        } else if (req.body.note3 == true) {
            var updateRecords = {
                course_id: req.body.course_id,
                user_id: req.body.user_id,
                note3: req.body.note3,
            };
        } else if (req.body.note4 == true) {
            var updateRecords = {
                course_id: req.body.course_id,
                user_id: req.body.user_id,
                note4: req.body.note4,
            };
        } else {
            var updateRecords = {
                course_id: req.body.course_id,
                user_id: req.body.user_id,
                note5: req.body.note5,
            };
        }
        console.log(lFound._id.toHexString());
        Learner.findByIdAndUpdate(
            lFound._id.toHexString(),
            { $set: updateRecords },
            { new: true },
            async (err, docs) => {
                if (!err) {
                    let lFound1 = await Learner.findOne({
                        course_id: req.body.course_id,
                        user_id: req.body.user_id,
                    });
                    if (lFound1) {
                        if (
                            lFound1.note1 == true &&
                            lFound1.note2 == true &&
                            lFound1.note3 == true &&
                            lFound1.note4 == true &&
                            lFound1.note5 == true
                        ) {
                            let eFound = await Enroll.findOne({
                                course_id: req.body.course_id,
                                user_id: req.body.user_id,
                            });
                            var updateRecords = {
                                status: "completed",
                            };
                            Enroll.findByIdAndUpdate(
                                eFound._id,
                                { $set: updateRecords },
                                { new: true },
                                (err, docs) => {
                                    if (!err) {
                                        res.send(docs);
                                    } else {
                                        console.log(
                                            JSON.stringify(err, undefined, 2)
                                        );
                                    }
                                }
                            );
                        }
                    }
                } else {
                    console.log(JSON.stringify(err, undefined, 2));
                }
            }
        );
    } else {
        if (req.body.note1 == true) {
            var newRecord = new Learner({
                course_id: req.body.course_id,
                user_id: req.body.user_id,
                note1: req.body.note1,
            });
        } else if (req.body.note2 == true) {
            var newRecord = new Learner({
                course_id: req.body.course_id,
                user_id: req.body.user_id,
                note2: req.body.note2,
            });
        } else if (req.body.note3 == true) {
            var newRecord = new Learner({
                course_id: req.body.course_id,
                user_id: req.body.user_id,
                note3: req.body.note3,
            });
        } else if (req.body.note4 == true) {
            var newRecord = new Learner({
                course_id: req.body.course_id,
                user_id: req.body.user_id,
                note4: req.body.note4,
            });
        } else {
            var newRecord = new Learner({
                course_id: req.body.course_id,
                user_id: req.body.user_id,
                note5: req.body.note5,
            });
        }
        newRecord.save((err, docs) => {
            if (!err) {
                console.log(docs);
                res.status(200).send({ data: "success" });
            } else {
                res.status(err);
            }
        });
    }
};
