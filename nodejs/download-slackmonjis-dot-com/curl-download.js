'use strict';

var DOWNLOAD_DIR = './download';
var fs = require('fs'),
	path = require('path'),
	readline = require('readline');
const spawn = require('child_process').spawn;
var request = require('request');


if(!fs.existsSync(DOWNLOAD_DIR)) {
	fs.mkdirSync(DOWNLOAD_DIR);
}
function download_file(file_url , fileName) {
	var r = request(file_url);
	r.on('response',  function (res) {
		console.log(res);
	  res.pipe(fs.createWriteStream(path.resolve(DOWNLOAD_DIR, fileName)));
	});
};


var rd = readline.createInterface({
    input: fs.createReadStream('./curl-list.txt'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
	var url = line.split(' ')[1].replace('\'','');
	console.log(url);
	var segments = url.split('/');
	var fileName = segments[segments.length - 1].split('?')[0];
	download_file(url, fileName);
	process.exit();
});
