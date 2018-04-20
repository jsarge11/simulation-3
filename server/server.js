const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')
require('dotenv').config();

let app = express();

app.use(bodyParser.json());

let { 
 SERVER_PORT,
 CONNECTION_STRING
} = process.env;

app.post('/api/register', ctrl.register);
app.post('/api/login', ctrl.login)

massive(CONNECTION_STRING).then( dbInstance => {
 app.set('db', dbInstance);
 app.listen(SERVER_PORT, ()=>console.log('Simulating for the third time on port ' + SERVER_PORT))
})
