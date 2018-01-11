const express = require('express');
const bodyParser = require('body-parser');
// Create app
const app = express()
// Movies router/controllerw
const moviesRouter = require('./routes/movies');
const authMiddleware = require('./middleware/auth')

app.use(require('cookie-parser')());
//set to a JSON response
app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded());// does this by the header.
app.use(require('express-session')(
  //screct is a crutial part of express
  {secret: 'secret', resave: false, saveUninitialized: false}
));
app.use(authMiddleware.initialize);

//pasted from the https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/movies', moviesRouter);
app.use('/auth', require('./routes/auth'));

app.get('/',(req,res) => {
    res.status(404).end();
});

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = app;
