# 后端代码（基于 Fastapi 开发）
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
- 接下来的任务：7.3 日下午
  - [ ] 再次讨论数据模型的设计，暂时定下基础的数据模型
  - [ ] 设计数据模型的属性及英文名称，写在 `schemas.py` 中
  - [ ] 根据数据模型手工设计数据表，写在 `data.py` 中
  - [ ] 设计路由，写在 `main.py` 中
  - [ ] 测试路由访问 `http://127.0.0.1:8000/docs`，查看自带的文档网页
  - 也可以自行阅读英文教程，了解更多内容

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

