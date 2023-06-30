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
```shell
uvicorn main:app --reload
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
> 任务：
> - [ ] 
