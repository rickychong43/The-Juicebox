require ('dotenv').config();
const jwt = require("jsonwebtoken")

const PORT = 5000;
const express = require('express');
const server = express();


const morgan = require('morgan');
server.use(morgan('dev'));

server.use(express.json())


server.use((req, res, next) => {
    console.log("<___Body Logger START___>")
    console.log(req.body);
    console.log("<____Boby Logger END")

    next();
});


const apiRouter = require('./api')
server.use('/api', apiRouter)

const { client } = require('./db')
client.connect();

server.listen(PORT, () =>{
    console.log("The server is up on port", PORT);
})