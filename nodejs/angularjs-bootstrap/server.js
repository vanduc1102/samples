serverConfigure=require('./configure.json')
var http = require('http');
var https = require('https');
var fs = require('fs');
var app = require('./rest/index')();



// Configure HTTPS connection.
var options = {
  key: fs.readFileSync('./ssl/server.key'),
  cert: fs.readFileSync('./ssl/server.crt')
};

// Auto redirect to HTTPS
function requireHTTPS(req, res, next) {
    if (!req.secure) {
        var addressSSL,
            host = serverConfigure.host ? serverConfigure.host : 'localhost',
            port = serverConfigure.sslPort;
        addressSSL = host + ':' + port;
        return res.redirect('https://' + addressSSL + req.url);
    }
    next();
}
//if (serverConfigure.httpsAutoRedirection) {
//    app.use(requireHTTPS);
//}


var server = https.createServer(options,app).listen(serverConfigure.sslPort, function () {
	var address,
        host = serverConfigure.host ? serverConfigure.host : 'localhost',
        port = serverConfigure.sslPort;
    address = host + ':' + port;
    console.log('HTTPS server is listenning on localhost:3443');
});

// Configure HTTP connection.
var server = http.createServer(app).listen(serverConfigure.port, function () {
 var address,
        host = serverConfigure.host ? serverConfigure.host : 'localhost',
        port = serverConfigure.port;
    address = host + ':' + port;
	console.log('HTTP server is listenning on localhost:3000');
});

