module.exports = function () {
	var path = require('path');
	var cookieParser = require('cookie-parser');
	var bodyParser = require('body-parser');
	var session = require('express-session');
	var express = require('express');
	var routes = require('./rest/user')();
	var app = express();
	var expressJwt = require('express-jwt');
	var jwt = require('jsonwebtoken');
	//var process = require('process');
	var secret="Key cat here........";

	app.use(bodyParser.json());
	app.use(cookieParser());
	
	// TODO:should create gzip contents for server.
	// use express create static server
	app.use(express.static(path.join(path.join(process.cwd(),'public'))));

	// We are going to protect /api routes with JWT
	app.use('/api', expressJwt({"secret": secret,requestProperty: 'tokenData'}));

	app.use(function (err, req, res, next) {
	  if (err.name === 'UnauthorizedError') {
	    res.send(401, 'invalid token...');
	  }else{
	  	next();
	  }
	});

	app.post('/login', function (req, res) {
	  //TODO validate req.body.username and req.body.password
	  //if is invalid, return 401
	  if (!(req.body.username === 'admin' && req.body.password === '123456')) {
	    res.send(401, 'Wrong user or password');
	    return;
	  }

	  var profile = {
	    first_name: 'Duc',
	    last_name: 'Nguyen',
	    email: 'duc@nguyen.com',
	    id: 123
	  };
	  // We are sending the profile inside the token
	  var token = jwt.sign(profile, secret, { expiresInMinutes: 1 });

	  res.json({ token: token });
	});

	app.get('/api/restricted', function (req, res,next) {
	  res.json({
	    message: 'Welcome ' +req.tokenData['first_name'] +' '+req.tokenData['last_name'] +', You are a new member'
	  });
	});

	return app;
}