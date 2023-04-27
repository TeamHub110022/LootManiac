const express = require('express');
const res = require('express/lib/response');

const app = express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.status(200);
    res.send("hello world")
});

app.listen(PORT,(error)=>{
    if(!error)
    console.log("server is successfully running and App is listening to PORT "+PORT)
    else
    console.log("Error has occured in opening the server because of ",error)
}
);

