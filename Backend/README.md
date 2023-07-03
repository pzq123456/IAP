# 后端代码（基于 Fastapi 开发）
- 接下来的任务：7.4 日
  - [ ] 再次讨论数据模型的设计，暂时定下基础的数据模型
  - [ ] 设计数据模型的属性及英文名称，写在 `schemas.py` 中
  - [ ] 根据数据模型手工设计数据表，写在 `data.py` 中
  - [ ] 设计路由，写在 `main.py` 中
  - [ ] 测试路由访问 `http://127.0.0.1:8000/docs`，查看自带的文档网页
  - 也可以自行阅读英文教程，了解更多内容
## 运行示例程序
### 0. 创建虚拟环境（Python）
- 首先进入到 Backend 目录下
    ```shell
    cd Backend
    ```
- 然后创建虚拟环境
    ```shell
    py -3 -m venv .venv
    ```
### 1. 安装依赖
> 以下内容需要在 Backend 目录下执行
> - 创建虚拟环境是为了保持项目依赖的干净，所以需要在虚拟环境下安装依赖
> - 你可以使用以下命令导出当前虚拟环境的依赖
>   ```shell
>    pip freeze > requirements.txt
>   ```
```shell
pip install -r requirements.txt
```
### 2. 运行
- 运行以下命令
- 如果你的入口文件是 main.py，那么需要修改这里的 main 为你的入口文件名
```shell
uvicorn main:app --reload # 如果你的入口文件不是 main.py，那么需要修改这里的 main 为你的入口文件名
```
- 如果你的入口文件是 app/main.py，那么需要修改这里的 main 为 app.main
```shell
uvicorn app.main:app --reload  # 如果你的入口文件是 app/main.py，那么需要修改这里的 main 为 app.main
```
### 3. 查看自带的文档网页
- 打开浏览器，访问 "http://127.0.0.1:8000/docs" 即可查看自带的文档网页。
- 这是 FastAPI 自带的交互式文档，因为 FastAPI 是基于 OpenAPI 标准构建的框架。这些文档页面是交互式的，有利于手动测试接口，随着我们在代码中添加更多的端点并描述预期的输入/输出值，这些文档页面将会变得越来越详细。
- 尝试一下你的端点：
  - 点击 GET 端点
  - 点击 “Try It Out” 按钮
  - 点击大的 “Execute” 按钮
  - 点击小的 “Execute” 按钮
> - crul 命令行工具： Fastapi 就是通过这个工具来获取数据的
## 基本概念
> 参考 MDN 的[文档](https://developer.mozilla.org/zh-CN/docs/web/http/overview#)
### HTTP 请求标头
- `GET` 方法请求一个指定资源的表示形式，使用 `GET` 的请求应该只被用于获取数据。
- `POST` 方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用。
- `PUT` 方法用有效载荷请求替换目标资源的所有当前表示。
- `DELETE` 方法删除指定的资源。

## Tutorial
> - [tutorial](https://christophergs.com/tutorials/ultimate-fastapi-tutorial-pt-1-hello-world/)
> - 我会首先阅读上述教程，然后提炼出我们需要的内容，写在这里

### 0.项目结构
> - 原教程循序渐进，逐步引入依赖，项目结构的复杂性也随之递增。
> - 为了便于上手，我们先不引入数据库，而是用内存（Python 中的表）来模拟数据库。数据库的部分根据项目进度决定是这学期引入，还是留作暑假作业。
- 项目文件结构及注释
    ```shell
    .
    ├── app
    │   ├── __init__.py
    │   ├── data.py # 模拟数据库
    │   ├── main.py # 入口文件
    │   ├── schemas.py # 数据模型
    ├── README.md
    └── requirements.txt
    ```
    - 以上就是目前我们的项目结构。 
    - `data.py` 中使用 python 中的表来模拟数据库，`schemas.py` 中定义数据模型，`main.py` 中定义路由。目前还不涉及数据库部分，但是现在做的工作都是为了后面引入数据库做准备（数据模型设计好了，路由也设计好了，只需要修改 `data.py` 中的内容即可）。

### 1. 利用 `pydantic` 定义数据模型
- `pydantic` 是一个数据验证库，可以用来定义数据模型。我们可以优先使用它来设计数据模型。
> [Field Types](https://docs.pydantic.dev/latest/usage/types/#standard-library-types): 数据模型的字段种类，在具体设计数据模型时，可以参考这里的内容。
- 例如，我们可以定义一个 `User` 类，用来表示用户
    ```python
    from pydantic import BaseModel

    class User(BaseModel):
        id: int
        name = 'John Doe'
        signup_ts: Optional[datetime] = None
        friends: List[int] = []
    ```
- 或者这个来自博客中的例子
    ```py
    from pydantic import BaseModel

    class Car(BaseModel): # 汽车
        brand: str # 品牌
        color: str # 颜色
        gears: int # 档位

    class ParkingLot(BaseModel): # 停车场
        cars: List[Car]  # 递归使用 `Car` 用来表示停车场中的车辆
        spaces: int
        valet: bool
    ```

### 2. 模拟数据库表及带有参数的路由
> - 为了学习，我也编写了示例。可以查看 main.py 中的代码。（不是 app/main.py）当然，我也会把有关代码贴在下面。
#### 模拟数据库表（使用 python 自带的 list 及 字典 来模拟数据库）
> - 这里我实现了最简单的图片上传与查看功能。上传图片后，会返回一个图片的 url，通过这个 url 可以查看图片。
- 为了模拟数据库，我们需要在 `data.py` 中定义一个 list，用来存储数据。这个 list 就相当于数据库中的一张表。
    ```python
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
    ```
    - 以上就是我们的数据库表，其中每个元素都是一个字典，代表一张图片。图片的名称，为了避免重复，使用 UUID 来表示。URL 为图片的访问地址，path 为图片本地相对的存储路径。一般大型项目中，图片都是存储在云端的，这里为了简单，就直接存储在本地了。这里使用这种方式来模拟数据库，后面我们会引入数据库，到时候只需要修改这里的代码即可。
- 下面是具体的获取某个图片的接口写法
    ```python
    # 根据 UID 查询图片 并返回图片  
    @app.get("/getimg/{UID}")
    async def get_img(UID: str = Path(..., title="UID", description="图片唯一标识符")):
        for img in IMAGELIST:
            if img["UID"] == UID:
                return FileResponse(img["path"])
        raise HTTPException(status_code=404, detail="图片不存在")
    ```
    - 这里使用了 `Path` 来获取参数，`...` 表示参数是必须的，`title` 和 `description` 是参数的标题和描述。`title` 和 `description` 可以不写，但是不建议这么做，因为这样会导致 swagger 文档中的参数描述不清晰。
    - `FileResponse` 是 FastAPI 中用来返回文件的类，这里我们返回图片文件。
    - `raise HTTPException(status_code=404, detail="图片不存在")` 是 FastAPI 中用来抛出异常的方法，这里我们抛出 404 异常，表示图片不存在。
    - 查找图片的方法很简单，就是遍历 `IMAGELIST`，找到 UID 相同的图片，然后返回图片文件。这里有一点需要强调，模拟数据库的列表是 list 包裹 字典 的结构，而我们在上传图片是直接将 image 类的实例放入了 IMAGE 表。所以这里会有一些问题。
    - 以上就是获取图片的接口，当然，我们还需要一个接口来上传图片。
- 图片上传接口
    ```python
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
    ```
    - 这里使用了 `UploadFile` 来获取文件，`...` 表示参数是必须的。`UploadFile` 是 FastAPI 中用来获取文件的类，这里我们获取文件后，将文件写入本地，然后将图片信息添加到 `IMAGELIST` 中，最后返回图片对象。
### 3. An Endpoint With Query Params 带有查询参数的路由
> - 这里没有来得及编写自己的例子，直接看他给的
```py
# skipping...

# 1
RECIPES = [
    {
        "id": 1,
        "label": "Chicken Vesuvio",
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
    },
    {
        "id": 2,
        "label": "Chicken Paprikash",
        "source": "No Recipes",
        "url": "http://norecipes.com/recipe/chicken-paprikash/",
    },
    {
        "id": 3,
        "label": "Cauliflower and Tofu Curry Recipe",
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2011/02/cauliflower-and-tofu-curry-recipe.html",
    },
]

# 2 new addition, query parameter
@api_router.get("/search/", status_code=200)  # 3
def search_recipes(
    keyword: Optional[str] = None, max_results: Optional[int] = 10  # 4 & 5
) -> dict:
    """
    Search for recipes based on label keyword
    """
    if not keyword:
        # we use Python list slicing to limit results
        # based on the max_results query parameter
        return {"results": RECIPES[:max_results]}  # 6

    results = filter(lambda recipe: keyword.lower() in recipe["label"].lower(), RECIPES)  # 7
    return {"results": list(results)[:max_results]}

# skipping...
```
- 与第二节不同的是，这里的路由并没有路径参数（path paramters）而是查询参数（query parameters）。
- 这里的 `search_recipes()` 方法定义了新接口的逻辑。它的参数表示端点的查询参数。有两个参数：`keyword` 和 `max_results`。
  - 你可以使用这种路径来调用查询功能：`http://localhost:8001/search/?keyword=chicken&max_results=2`
- 这里对于每一参数，我们使用 python 基础类型之一的 Optional 。如果你不指定类型，那么它就是一个字符串。如果你不指定是否是必须的，那么它就是必须的。
- 每一个参数都有默认值。如果你不指定 `keyword`，那么它就是 `None`。如果你不指定 `max_results`，那么它就是 `10`。
- 具体的查询逻辑，我们使用了 `filter()` 函数，它接受一个函数和一个可迭代对象。它会对可迭代对象中的每一个元素调用函数，如果函数返回 `True`，那么这个元素就会被保留。如果函数返回 `False`，那么这个元素就会被过滤掉。
#### 测试接口（使用动态文档）
- 测试接口
  - 点击 GET 接口
  - 点击 “Try It Out” 按钮
  - 输入 “chicken” 作为关键字
  - 点击大的 “Execute” 按钮
  - 点击出现的小的 “Execute” 按钮
  - 看到结果
- 可以发现，只有两个鸡肉食谱被返回了。再试试用关键字 cauliflower 来看看 “Cauliflower and Tofu Curry” 食谱被返回。然后试着调整 max_results 参数。
    