from fastapi import FastAPI, UploadFile,Form, Request
from fastapi.responses import PlainTextResponse,HTMLResponse
from starlette.responses import FileResponse 
from fastapi.staticfiles import StaticFiles

from dotenv import load_dotenv

load_dotenv()

app = FastAPI()


app.mount("../frontend/build/", StaticFiles(directory="../frontend/build/"), name="frontend")

    
@app.get("/")
async def root():
    return FileResponse('../frontend/index.html')