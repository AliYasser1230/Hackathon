const express = require("express");
let dataModel = require("../models/user");
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.post("/adddata", async(req,res)=>{
    const user = new dataModel(req.body);
    try{
        await user.save();
        res.send(user);
    }catch(error){
        res.status(500).send(error);
    }
})

app.get("/getdata", async(req,res)=>{
    const users = await dataModel.find({});

    try{
        res.send(users);
    }
    catch(error){
        console.log(error);
    }
})

module.exports = app;


