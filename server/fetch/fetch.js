//import mongodb module
//require() function used to import the modules
let mongodb = require("mongodb");

//mongodb follows the client server architecture
//so, we must create the client
let affyIT = mongodb.MongoClient;
//where "affyIT" is the client


//create the module
let fetch = require("express").Router().get("/",(req,res)=>{
    affyIT.connect("mongodb://localhost:27017/online",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employees").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});

//export fetch module
module.exports = fetch;


