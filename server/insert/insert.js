let mongodb = require("mongodb");
let affyIT = mongodb.MongoClient;

let insert = require("express").Router().post("/",(req,res)=>{
    affyIT.connect("mongodb://localhost:27017/online",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employees").insertOne({"firstName":req.body.firstName,
                                                  "lastName":req.body.lastName,
                                                  "email":req.body.email,
                                                  "mobile":req.body.mobile},(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({"insert":"success"});
                    }
            });
        }
    });
});

module.exports = insert;