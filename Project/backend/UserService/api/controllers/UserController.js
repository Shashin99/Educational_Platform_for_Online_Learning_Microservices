const express = require("express");
var ObjectID = require("mongoose").Types.ObjectId;
var md5 = require("md5");
var { User } = require("../models/User");

exports.login = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let userFound = await User.findOne({ email: email });
    if (userFound) {
        if (md5(password) == userFound.password) {
            if (userFound.active == true) {
                if (userFound.privilege == "admin") {
                    res.send(
                        JSON.stringify({
                            err: "success",
                            res: "admin",
                            email: userFound.email,
                            id: userFound._id,
                        })
                    );
                } else {
                    res.send(
                        JSON.stringify({
                            err: "success",
                            res: "user",
                            email: userFound.email,
                            id: userFound._id,
                        })
                    );
                }
            } else {
                res.status(200).send(
                    JSON.stringify({ err: "activation fail" })
                );
            }
        } else {
            res.status(200).send(JSON.stringify({ err: "Incorrect Password" }));
        }
    } else {
        res.status(200).send(JSON.stringify({ err: "User not found" }));
    }
};

exports.newUser = async (req, res) => {
    var newRecord = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        nic: req.body.nic,
        email: req.body.email,
        contact_no: req.body.contact_no,
        password: md5(req.body.password),
        active: false,
        privilege: "student",
    });

    newRecord.save((err, docs) => {
        if (!err) {
            console.log(docs);
            res.status(200).send({ data: "success" });
        } else {
            console.log(err);
            if (err["keyPattern"]["email"] == 1) {
                console.log(err["keyPattern"]["email"]);
                res.status(200).send({ err: "email" });
            } else if (err["keyPattern"]["nic"] == 1) {
                console.log(err["keyPattern"]["nic"]);
                res.status(200).send({ err: "nic" });
            } else {
                res.status(err);
            }
        }
    });
};

exports.editUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
    }

    var updateRecords = {
        privilege: req.body.privilege,
        active: req.body.active,
    };

    User.findByIdAndUpdate(
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
