import uvicorn

if __name__ == "__main__":
    uvicorn.run("app:main", port=8000, log_level="info")
