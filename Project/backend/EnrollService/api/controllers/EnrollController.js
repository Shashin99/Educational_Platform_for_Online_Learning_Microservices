const express = require("express");
var ObjectID = require("mongoose").Types.ObjectId;
var { Enroll } = require("../models/Enroll");

exports.getAll = async (req, res) => {
    Enroll.find((err, docs) => {
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

    Enroll.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(JSON.stringify(err, undefined, 2));
        }
    });
};

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

exports.editEnroll = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
    }

    var updateRecords = {
        course_id: req.body.course_id,
        user_id: req.body.user_id,
        date: req.body.date,
        time: req.body.time,
        status: req.body.status,
    };

    Enroll.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecords },
        { new: true },
        (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log(JSON.stringify(err, undefined, 2));
            }
        }
    );
};

exports.deleteEnroll = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
    }

    Enroll.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.send(err);
        }
    });
};
