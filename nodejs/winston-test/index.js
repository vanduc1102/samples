'use strict';

const logger = require('./logger');

const dumpObj = {
	hello:"world",
	saySth:"OK"
}

logger.debug('here is debug', dumpObj);
logger.error('here is error', dumpObj);
logger.info('here is info',dumpObj);
logger.debug('here is debug',dumpObj);
logger.debug('here is debug',dumpObj);
logger.debug('here is debug',dumpObj);
logger.debug('here is debug',dumpObj);