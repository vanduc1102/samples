import os
import threading
from logger import logger
import uvicorn

logger.debug("Debug message")

def main():
    print("Starting server...")
    print("ID of process running server: {}".format(os.getpid()))
    print("Main thread is daemon: {}".format(threading.current_thread().daemon))
    # uvicorn.run("app.app:main", port=8000, log_level="debug", reload=True)

    print("Main thread name: {}".format(threading.current_thread().name))
    print("Main thread ID: {}".format(threading.get_ident()))

    t1 = threading.Thread(target=task1, name='t1', daemon=True, args= (logger,))
    t2 = threading.Thread(target=task2, name='t2')

    t1.start()
    t2.start()

    t1.join()
    t2.join()
    print("end of threads")

def task1(logger):
    print("Task 1 assigned to thread: {}".format(threading.current_thread().name))
    print("ID of process running task 1: {}".format(os.getpid()))
    print("ID of process running task 1 - isDaemon: {}".format(threading.current_thread().isDaemon()))
    logger.info("Logger - Task 1 assigned to thread: {}".format(threading.current_thread().name))

def task2():
    print("Task 2 assigned to thread: {}".format(threading.current_thread().name))
    print("ID of process running task 2: {}".format(os.getpid()))
    print("ID of process running task 2 - isDaemon: {}".format(threading.current_thread().isDaemon()))
