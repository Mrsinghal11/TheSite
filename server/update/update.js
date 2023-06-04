let mongodb=require("mongodb");
let affyIT=mongodb.MongoClient;

let update=require("express").Router().put("/",(req,res)=>{
    affyIT.connect("mongodb://localhost:27017/online",(err,db)=>{
        if (err) throw err;
        else{
            db.collection("employees").updateOne({"firstName":req.body.firstName},
                                                 {$set:{"lastName":req.body.lastName,
                                                        "email":req.body.email,
                                                        "mobile":req.body.mobile}},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"update":"success"});
                }
            });
        }
    })
});

module.exports=update;