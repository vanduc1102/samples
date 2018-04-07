'use strict';

const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');
const fs = require('fs');
const logLevel =  process.env.LOG_LEVEL || process.env.NODE_ENV !== 'production' ? 'debug' : 'info';

const logFolder = path.resolve(path.dirname(require.main.filename), 'log');

if(!fs.existsSync(logFolder)){
	fs.mkdirSync(logFolder);
}

function getLabel (callingModule) {
	if(!callingModule){
		return '';
	}
	let parts = callingModule.filename.split('/');
	return parts[parts.length - 2] + '/' + parts.pop();
};

function createLogger(callingModule) {
	let logger  = new winston.Logger({
		transports: [
			new (winston.transports.DailyRotateFile)({
				name:'rotate-file-logger',
				dirname: logFolder,
				filename: './log',
				datePattern: 'yyyy-MM-dd.',
				prepend: true,
				maxsize: 1024 * 1024 * 5,
				level: logLevel,
				label: getLabel(callingModule)
			}),
			new (winston.transports.Console)({
				name:'console-logger',
				label: getLabel(callingModule)
			})
		]
	});
	if (process.env.NODE_ENV !== 'production') {
		logger.remove('rotate-file-logger')
	}
	return logger;
};

module.exports = createLogger;