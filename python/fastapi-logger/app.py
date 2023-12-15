from dotenv import load_dotenv

from typing import Union

from fastapi import FastAPI
from logger import logger

load_dotenv()  # take environment variables from .env.

logger.debug("This is a debug!")
logger.info("This is an info!")
logger.warning("This is an warning!")
logger.error("This is an error!")

app = FastAPI()

@app.get("/")
def read_root():
    logger.info(f"request / endpoint!")
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    logger.info(f"request / endpoint! %d", item_id)
    return {"item_id": item_id, "q": q}

main = app
