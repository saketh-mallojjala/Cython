// const express = require("express");
// const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res1){
//    res1.send("hello Saketh Mallojjala")
// });



// app.listen(process.env.PORT||3000,function(){
//    console.log("my second server started ");
// });


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/sendData', (req, res) => {
  
//   const { id, value } = req.body;
const {domain, expirationDate, hostOnly, httpOnly, name, path, sameSite, secure, session, storeId } = req.body;

  
//   console.log(`Received ID: ${id}, Value: ${value}`);

  console.log(`Domain: ${domain}`);
  console.log(`Expiration Date: ${expirationDate}`);
  console.log(`Host Only: ${hostOnly}`);
  console.log(`Http Only: ${httpOnly}`);
  console.log(`Name: ${name}`);
  console.log(`Path: ${path}`);
  console.log(`Same Site: ${sameSite}`);
  console.log(`Secure: ${secure}`);
  console.log(`Session: ${session}`);
  console.log(`Store ID: ${storeId}`);


  res.send('Data received successfully');
});

app.get('/',(req,res)=>{
   res.send("hello")
})

const port = 3000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



