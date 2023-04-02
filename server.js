const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res1){
   res1.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res){
   console.log(req.body);
   res.send("thanks for posting")
});

app.listen(process.env.PORT||3000,function(){
   console.log("my second server started ");
});