const express = require('express')
var md5 = require('md5')
var { User } = require("../models/User");

exports.newUser = async (req,res)=>{
    var newRecord= new User({
        fname: req.body.fname,
        lname: req.body.lname,
        nic: req.body.nic,
        email: req.body.email,
        contact_no: req.body.contact_no,
        password: md5(req.body.password),
        active: false,
        privilege: 'student'
    })

    newRecord.save((err,docs)=>{
        if(!err){
            console.log(docs)
            res.status(200).send({"data":"success"})
        }else{
            console.log(err)
            if(err['keyPattern']['email']==1){
                console.log(err['keyPattern']['email'])
                res.status(200).send({"err":"email"})
            }else if(err['keyPattern']['nic']==1){
                console.log(err['keyPattern']['nic'])
                res.status(200).send({"err":"nic"})
            }else{
                res.status(err)
            }
        }
    })
}
