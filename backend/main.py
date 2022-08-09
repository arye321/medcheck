from fastapi import FastAPI, UploadFile,Form, Request,Response
from fastapi.responses import PlainTextResponse,HTMLResponse
from starlette.responses import FileResponse 
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from pydantic import BaseModel

load_dotenv()

app = FastAPI()

class Item(BaseModel):
    name: str
    
@app.get("/")
async def root():
    return "xd"

@app.post("/test")
async def create_item(name: dict):
    return name