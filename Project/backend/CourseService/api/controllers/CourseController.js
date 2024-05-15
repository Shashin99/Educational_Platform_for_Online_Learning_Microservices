const express = require("express");
var ObjectID = require("mongoose").Types.ObjectId;
var { Course } = require("../models/Course");
var multer = require("multer");
var uniqid = require("uniqid");

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
        return res.status(400).send(req.params.id);
    }

    Course.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(JSON.stringify(err, undefined, 2));
        }
    });
};

exports.newCourse = async (req, res) => {
    var newRecord = new Course({
        name: req.body.name,
        note1: req.body.note1,
        note2: req.body.note2,
        note3: req.body.note3,
        note4: req.body.note4,
        note5: req.body.note5,
        price: req.body.price,
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

exports.editCourse = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
    }

    var updateRecords = {
        name: req.body.name,
        note1: req.body.note1,
        note2: req.body.note2,
        note3: req.body.note3,
        note4: req.body.note4,
        note5: req.body.note5,
        price: req.body.price,
        video_link: req.body.video_link,
        quiz_details: req.body.quiz_details,
    };

    Course.findByIdAndUpdate(
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

exports.deleteCourse = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
    }

    Course.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.send(err);
        }
    });
};

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public");
    },
    filename: function (req, file, cb) {
        cb(null, uniqid() + "-" + file.originalname);
    },
});

var upload = multer({ storage: storage }).single("file");

exports.uploadFile = async (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).send(req.file);
    });
};
