const express = require("express");
var ObjectID = require("mongoose").Types.ObjectId;
var md5 = require("md5");
var { User } = require("../models/User");
const nodemailer = require("nodemailer");

exports.getAll = async (req, res) => {
    User.find((err, docs) => {
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

    User.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(JSON.stringify(err, undefined, 2));
        }
    });
};

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
    var code = generate(6);
    var newRecord = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        nic: req.body.nic,
        email: req.body.email,
        contact_no: req.body.contact_no,
        password: md5(req.body.password),
        access: false,
        active: false,
        otp: code,
        privilege: "student",
    });

    newRecord.save((err, docs) => {
        if (!err) {
            email(req.body.email, code);
            console.log(docs);
            email_with_subject(
                req.body.email,
                "REGISTRATION",
                `Hi, ${req.body.fname} ${req.body.lname} YOUR ACCOUNT HAS BEEN SUCCESSFULLY CREATED!`
            );
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

exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
    }

    User.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.send(err);
        }
    });
};

function email(email_address, code) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "shashinleo@gmail.com",
            pass: "sebrvbojstnliwbz",
        },
    });

    var mailOption = {
        from: "shashinleo@gmail.com",
        to: email_address,
        subject: "OTP Code",
        text: code,
    };

    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            res.send(error);
        } else {
            console.log("Message sent: %s", info.response);
            res.send(info.response);
        }
    });
}

function email_with_subject(email_address, subject, code) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "shashinleo@gmail.com",
            pass: "sebrvbojstnliwbz",
        },
    });

    var mailOption = {
        from: "shashinleo@gmail.com",
        to: email_address,
        subject: subject,
        text: code,
    };

    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            res.send(error);
        } else {
            console.log("Message sent: %s", info.response);
            res.send(info.response);
        }
    });
}

function generate(n) {
    var add = 1,
        max = 12 - add;
    if (n > max) {
        return generate(max) + generate(n - max);
    }
    max = Math.pow(10, n + add);
    var min = max / 10;
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return ("" + number).substring(add);
}
