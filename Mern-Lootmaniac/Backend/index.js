require('dotenv').config()

const express = require('express');
const { default: mongoose, connect } = require('mongoose');
const app = express();
const PORT=5000
const userrouter = require('./route/userroute')
app.use('/user',userrouter)

app.get('/',(req,res)=> res.send("<!DOCTYPE html><html><body><h3 style=\"color:Tomato;\">Hello World</h3><p style=\"color:DodgerBlue;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><p style=\"color:MediumSeaGreen;\">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p></body></html>"))

const start = async() =>{
    try{
        mongoose.set('strictQuery',true)
        await connect(process.env.MONGO_URI),
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT} ...`)
        }
        )
    }
    catch(err){
        console.log(err)
    }
}
start()
