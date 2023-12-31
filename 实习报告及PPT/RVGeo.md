# RVGeo 2.0 介绍
欢迎使用`RVGeo 2.0`，一个前端地理信息算法库，可快速为您的地图应用添加空间分析的能力。该库内部空间几何对象完全遵循 GeoJSON 标准，提供基础级空间分析函数。对于栅格数据，我们也具有一定的处理分析与渲染能力（该部分会有进一步拓展）。
## 目标：
整合各家地图资源，构建统一的空间信息开发体验。目前，市面上有百度地图、高德地图等网络基础地理信息服务提供商，然而这些地图的底层接口并未对外开放，用户只能使用服务商预留的各式接口来开发自己想要的功能。我们希望以 RVGeo 作为抽象层，以针对各家地图底图预留接口的封装函数库作为基石，打通前端地理信息开发体验。

目前，新能源汽车发展迅猛，车机交互也日益变得重要。在车机的开发中，地图展示是开发的重要部分。我们希望 RVGeo 能作为车机领域的基础设施，为车载地图的开发提供方便。针对这个方向，我们还打算引入前端三维框架以渲染车体模型。
## 项目结构
```
/RVGeo
    /constants
        /Ellipsoid （椭球体常数）
        /Units （单位转换）
        /Utils （一些数学工具函数）
    /CGUtils （计算几何）
    /Cluster （聚类）
    /Colors （颜色管理）
    /Delaunay （狄罗妮三角网）
    /Dijkstra （最短路径）
    /Distance （距离量测）
    /Geometry （基于 GeoJSON 的内置几何对象）
    /MetaData （从文件中读取数据并转换为内置对象）
    /Referencing （坐标系转换）
    /Renderer （渲染 开发中）
    /Shell （壳算法 包括凸包和凸壳）
```

```mermaid
graph TB
    A[RVGeo] --> B[constants]
    A --> C[CGUtils]
    A --> D[Cluster]
    A --> E[Colors]
    A --> F[Delaunay]
    A --> G[Dijkstra]
    A --> H[Distance]
    A --> I[Geometry]
    A --> J[MetaData]
    A --> K[Referencing]
    A --> L[Renderer]
    A --> M[Shell]
```