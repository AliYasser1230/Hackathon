const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    FirstName:{
        type: String,
        required: true,
    },
    LastName:{
        type: String,
        required: true,
    },
    Password:{
        type: String,
        requred:true
    },
    StudentID:{
        type: Number,
        required: true,
    },
    StudentMajor:{
        type: String,
        required: true,
    },
    UKGPA:{
        type: Number,
        required:true,
    },
    StudentGPA:{
        type: Number,
        required:true,
    }
});

const Data = mongoose.model("UserData", UserSchema);

module.exports = Data;