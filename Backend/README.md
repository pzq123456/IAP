# 后端代码（基于 Fastapi 开发）
## 运行
### 0. 创建虚拟环境（Python）
首先进入到 Backend 目录下
```shell
cd Backend
```
然后创建虚拟环境
```shell
py -3 -m venv .venv
```

### 1. 安装依赖
> 以下内容需要在 Backend 目录下执行

```shell
cd Backend
```
```shell
pip install -r requirements.txt
```

### 2. 运行
```shell
uvicorn main:app --reload
```