// loads .env file into process.env
require('dotenv').config() //Loads .env file contents into process.env by default. 

// import express 
const express = require('express');

//import cors
const cors = require('cors');

const db = require('./DB/connection')

const router = require('./Router/route')

const appMiddleware = require('./Middlewares/appMiddleware')

const jwtMiddleware = require('./Middlewares/jwtMiddleware')

//Create a backend application using express
const pfServer = express()

//use
pfServer.use(cors())
pfServer.use(express.json()) //Returns middleware that only parses json
// pfServer.use(appMiddleware)
pfServer.use(router)
pfServer.use('/Uploads',express.static('./Uploads')) //to export image from server(backend) to client(frontend)


//port creation
const PORT = 4000 || process.env.PORT

//server listen
pfServer.listen(PORT,()=>{
    console.log('listening on port ' +PORT);
})

//http - get resolving to http://localhost4000
pfServer.get("/",(req,res)=>{
    res.send(`<h1>Project Fair is Started....</h1>`)
})