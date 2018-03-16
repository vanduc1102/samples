var http = require('http')
var crypto = require('crypto')

http.createServer()
.on('request', function(req, res) {
	var email = req.url.substr(req.url.lastIndexOf('/')+1)
	if(!email) {
		res.writeHead(404);
		return res.end();
	}

	var buf = new Buffer(1024*1024)
	http.get('http://www.gravatar.com/avatar/'+crypto.createHash('md5').update(email).digest('hex'), function(resp) {
		var size = 0;
		resp.on('data', function(chunk) {
			chunk.copy(buf, size)
			size += chunk.length
		})
		.on('end', function() {
			res.write(buf.slice(0, size))
			res.end();
		});
	});
})
.listen(8080);
