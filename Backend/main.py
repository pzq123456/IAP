from enum import Enum

from pydantic import BaseModel

from fastapi import FastAPI, HTTPException, Path, Query, File, UploadFile
from fastapi.responses import HTMLResponse,FileResponse

import uuid # 生成唯一标识符

URL = "http://127.0.0.1:8000/"

app = FastAPI()

class ImageType(str, Enum):
    jpg = "jpg"
    png = "png"
    jpeg = "jpeg"
    gif = "gif"


class Image(BaseModel):
    UID: str
    url: str
    path: str

# 图片列表 python 中的列表存储 图片对象（字典）
IMAGELIST = [
    {
        "UID": "79411196-f0c2-4a56-9797-ea0c406df279",
        "url": "http://127.0.0.1:8000/getimg/79411196-f0c2-4a56-9797-ea0c406df279",
        "path": "./tmp/79411196-f0c2-4a56-9797-ea0c406df279.jpg"
    },
    {
        "UID": "437fb194-fb16-4e8d-b263-1fc1d1e648ab",
        "url": "http://127.0.0.1:8000/getimg/437fb194-fb16-4e8d-b263-1fc1d1e648ab",
        "path": "./tmp/437fb194-fb16-4e8d-b263-1fc1d1e648ab.jpg"
    }
]

# 上传图片
@app.post("/uploadimg/")
async def create_upload_img(file: UploadFile = File(...)):
    # 生成唯一标识符
    uid = uuid.uuid4()
    # 获取文件名
    filename = file.filename
    # 获取文件后缀
    suffix = filename.split(".")[-1]
    # 拼接文件名
    filename = str(uid) + "." + suffix
    # 拼接文件路径
    filepath = "./tmp/" + filename
    # 写入文件
    with open(filepath, "wb") as f:
        f.write(file.file.read())
        f.close()
    # 拼接图片 URL
    url = URL + "getimg/" + str(uid)
    # 创建图片对象
    img = Image(UID=str(uid), url=url, path=filepath)
    # 添加到图片列表
    IMAGELIST.append(img)
    # 返回图片对象
    return img


# 根据 UID 查询图片 并返回图片  
@app.get("/getimg/{UID}")
async def get_img(UID: str = Path(..., title="UID", description="图片唯一标识符")):
    for img in IMAGELIST:
        if img["UID"] == UID:
            return FileResponse(img["path"])
    raise HTTPException(status_code=404, detail="图片不存在")

# 获取图片列表
@app.get("/getimglist/")
async def get_img_list():
    return IMAGELIST


# http://127.0.0.1:8000/getimglist

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