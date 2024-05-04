import os
from dotenv import load_dotenv
import watchtower

import logging
import logging.config

import yaml

load_dotenv()  # take environment variables from .env.

with open("logging.yml") as log_config:
    config_yml = log_config.read()
    config_dict = yaml.safe_load(config_yml)
    logging.config.dictConfig(config_dict)

logger = logging.getLogger("hello-fast-api")
logger.setLevel(logging.DEBUG)

console_handler = logging.StreamHandler()
logger.addHandler(console_handler)


if os.getenv("APP_ENV") == "production":
    cw_handler = watchtower.CloudWatchLogHandler(log_group="hello-fast-api")
    logger.addHandler(cw_handler)
