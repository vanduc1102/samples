'use strict';

var request = require('request'),
	fs = require('fs'),
	path = require('path');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;


var dir = './download';
if(!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

var slackmojisUrl = 'https://slackmojis.com/';

request({
	followRedirect: true,
	url: slackmojisUrl,
	method: 'GET',
	contentType: 'text/html',
	gzip: true
  }, (error, response, body) => {
	if (error) {
		console.log('error');
	}
	try {
		const { document } = (new JSDOM(response.body)).window;
		let images = document.querySelectorAll('img');
		// body.querySelectorAll('img').forEach(e => console.log(e.src));
		console.log(images.length);
	} catch (error) {
		console.log('error : ', error);
	}
});

function downloadImage( uri, callback ) {
	//http://emojis.slackmojis.com/emojis/images/1492722368/2094/whining.gif?1492722368
	var filename = getFileName(uri);
	var downloaded = path.resolve(dir, filename);
	request.head(uri, function(err, res, body){
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);
		request(uri).pipe(fs.createWriteStream(downloaded)).on('close', callback);
	});
}

function getFileName ( fullURL ){
	var segments =  fullURL.split('/');
	return segments[segments.length - 1].split('?') [0];
}

// downloadImage('https://www.google.com/images/srpr/logo3w.png', function(){
//   console.log('done');
// });