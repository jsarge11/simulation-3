const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')

require('dotenv').config();

let app = express();

app.use(bodyParser.json());

let { 
 SERVER_PORT,
 CONNECTION_STRING,
 SESSION_SECRET,
 DOMAIN,
 CLIENT_ID,
 CLIENT_SECRET,
 CALLBACK_URL
} = process.env;

app.post('/api/register', ctrl.register);
app.post('/api/login', ctrl.login);
app.get('/api/posts', ctrl.getposts);
app.get('/api/post/:id', ctrl.get_single_post);

app.use(session({ 
 resave: false,
 saveUninitialized: false,
 secret: SESSION_SECRET
}))
app.use(passport.initialize());
app.use(passport.session())

passport.use( new Auth0Strategy ({
 domain: DOMAIN,
 clientID: CLIENT_ID,
 clientSecret: CLIENT_SECRET,
 callbackURL: CALLBACK_URL,
 scope: 'openid profile'
 
}, function (accessToken, refreshToken, extraParams, profile, done) {
 return done(null, profile);
}))

passport.serializeUser((profile, done) => {
 return done(null, profile);
})
passport.deserializeUser((profile, done) => {
 return done(null, profile);
})

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
 successRedirect: 'http://localhost:3000/#/',
 failureRedirect: 'http://localhost:3000/#/login'
}))



massive(CONNECTION_STRING).then( dbInstance => {
 app.set('db', dbInstance);
 app.listen(SERVER_PORT, ()=>console.log('Simulating for the third time on port ' + SERVER_PORT))
})
