// Load modules
const express = require("express");
const app = express();
const cors = require("cors"); //allows for cross site requests
const bodyParser = require("body-parser"); //allows you to read data that gets sent into the API
const router = require("./app/routes/router"); //

// Database configuration
const database = require('./app/config/dbconfig');

// Init database
database.init();

app.listen(8000, function(){
    console.log("Server is listening on port: 8000")
})


// Express config
//two methods that the API can receive data either through Parser or json
app.use(cors());
app.use(bodyParser.urlencoded(
    {extended:false}));
app.use(bodyParser.json());

// Router config
app.use("/api", router);