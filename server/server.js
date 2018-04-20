const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config();

let app = express();

app.use(bodyParser.json());

let { 
 SERVER_PORT,
} = process.env;

app.listen(SERVER_PORT, ()=>console.log('Simulating for the third time on port ' + SERVER_PORT))