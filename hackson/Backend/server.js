let express = require("express");
let cors = require("cors");
let dotenv= require("dotenv");
dotenv.config();
let mongoose = require('mongoose');
let router = require("./routing/router");


const app = express();
app.use(express.json());
app.use(cors());
app.use(router);


let dblink = process.env.DB;

mongoose.connect(dblink, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.once("open", function () {
    console.log("Connected successfully");
  });

let port = process.env.port;

app.listen(port, ()=>{
    console.log("Listening on port: " + port);
})