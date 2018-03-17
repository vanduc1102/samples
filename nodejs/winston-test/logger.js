'use strict';
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path'),
fs = require('fs'),
logLevel =  process.env.LOG_LEVEL || process.env.NODE_ENV !== 'production' ? 'debug' : 'info';

const logFolder = path.resolve(path.dirname(require.main.filename), 'log');

if(!fs.existsSync(logFolder)){
	fs.mkdirSync(logFolder);
}

const transportDailyRotateFile = new (winston.transports.DailyRotateFile)({
	dirname: logFolder,
    filename: './log',
    datePattern: 'yyyy-MM-dd.',
	prepend: true,
	maxsize: 1024,
    level: logLevel
  });

const logger = new (winston.Logger)({
	level: logLevel,
	transports: [
		transportDailyRotateFile
	]
});

if (process.env.NODE_ENV !== 'production') {
	logger.add(winston.transports.Console);
}

module.exports = logger;