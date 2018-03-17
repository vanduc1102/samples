'use strict';


const logger = require('./logger');

console.log('process.env.NODE_ENV : ',process.env.NODE_ENV);

const dumpObj = {
	hello:"world",
	saySth:"OK"
}

logger.debug('here is debug', dumpObj);
logger.error('here is error', dumpObj);
logger.info('here is info',dumpObj);
logger.warn('here is warn',dumpObj);
logger.debug('here is debug',dumpObj);
logger.debug('here is debug',dumpObj);
logger.debug('here is debug',dumpObj);
logger.error(dumpObj);
logger.error('fuck fump');