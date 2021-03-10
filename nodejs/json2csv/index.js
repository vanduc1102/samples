var fs = require('fs');

var rows = require('./data/all-28-aug-2017.json').resultSets[0].rows;
var lines = rows.map(function(row){
	return row[0]+ ',' + row[1].title + ',' + row[2]+ ',' + 'https://stackoverflow.com/users/' + row[1].id ;
});

var file = fs.createWriteStream('./output/out_put.csv');
file.on('error', function(err) { /* error handling */ });
file.write('No,Name,Reputation,StackOverflowLink\n');
lines.forEach(function(v) { file.write(v + '\n'); });
file.end();