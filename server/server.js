//import express module
let express = require("express");

//create the rest object
//rest object used to collabrate the modules
let app = express();
//where "app" is the master object

//import cors module
let cors = require("cors");
const bodyParser = require("body-parser");

//enable ports communication
app.use(cors());

//set the json as MIME Type
app.use(bodyParser.json());


//read the json
app.use(bodyParser.urlencoded({extended:false}));



//use the fetch module
app.use("/fetch",require("./fetch/fetch"));


//use insert module
app.use("/insert",require("./insert/insert"));


//use update module
app.use("/update",require("./update/update"));


//use delete module
app.use("/delete",require("./delete/delete"));


//assign the port number to server
app.listen(8080);
console.log("server listening the port no.8080");