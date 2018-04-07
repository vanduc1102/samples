var winston = require('winston');
// var logger = new winston.Logger();


// winston.add('AAA');
winston.loggers.get('category1').debug('aaaaaaa NGUYEN VAN DUC');
winston.log('info', 'Hello distributed log files!');
winston.info('Hello again distributed logs');
