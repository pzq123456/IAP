from enum import Enum

from pydantic import BaseModel

from fastapi import FastAPI, HTTPException, Path, Query, File, UploadFile
from fastapi.responses import HTMLResponse,FileResponse

import uuid # 生成唯一标识符

app = FastAPI()

class Image(BaseModel):
    UID: str
    name: str
    url: str
    path: str


IMAGELIST = [
    {
    "UID": "eaac40f5-18e9-11ee-85f0-782b46e7b138",
    "name": "test.jpg",
    "url": "http://10.18.15.96:8000/getimg/?UID=eaac40f5-18e9-11ee-85f0-782b46e7b138",
    "path": "E:\\IAP\\Backend\\app\\tmp\\eaac40f5-18e9-11ee-85f0-782b46e7b138.jpg"
    }
]

# 获取当前网址
def get_host():
    import socket
    hostname = socket.gethostname()
    ip = socket.gethostbyname(hostname)
    return ip



# 接受图片 生成唯一标识符 保存到本地
# 并保存到本地 E:\IAP\Backend\app\tmp
@app.post("/uploadimg/")
async def create_upload_files(file: UploadFile = File(...)):
    UID = str(uuid.uuid1())
    contents = await file.read()
    with open(f"E:\\IAP\\Backend\\app\\tmp\\{UID}.jpg", "wb") as f:
        f.write(contents)
    url = f"http://{get_host()}:8000/getimg/?UID={UID}"
    path = f"E:\\IAP\\Backend\\app\\tmp\\{UID}.jpg"
    img = Image(UID=UID, name=file.filename, url=url, path=path)
    IMAGELIST.append(img)
    return img

# 根据唯一标识符获取图片
@app.get("/getimg/")
async def getimg(UID: str):
    for img in IMAGELIST:
        if img["UID"] == UID:
            return FileResponse(img["path"])
    raise HTTPException(status_code=404, detail="Item not found")



@app.get("/")
async def main():
    content = """
<body>
<form action="/uploadimg/" enctype="multipart/form-data" method="post">
<input name="file" type="file" multiple>
<input type="submit">
</form>
</body>
    """
    return HTMLResponse(content=content)




# @app.post("/files/")
# async def create_files(files: list[bytes] = File()):
#     return {"file_sizes": [len(file) for file in files]}


# @app.post("/uploadfiles/")
# async def create_upload_files(files: list[UploadFile]):

#     return {"filenames": [file.filename for file in files]}


# @app.get("/")
# async def main():
#     content = """
# <body>
# <form action="/files/" enctype="multipart/form-data" method="post">
# <input name="files" type="file" multiple>
# <input type="submit">
# </form>
# <form action="/uploadfiles/" enctype="multipart/form-data" method="post">
# <input name="files" type="file" multiple>
# <input type="submit">
# </form>
# </body>
#     """
#     return HTMLResponse(content=content)
