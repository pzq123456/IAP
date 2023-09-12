/**
 * 用于调用百度地图的绘制工具。
 * - 百度地图 api 是外部库，所以不放在 package 目录下。
 * - helpers 目录下的文件可以作为使用样例做参考之用。
 * - 由于无法使用 import 语句，所以只能使用全局变量 BMap。
 * - map 作为参数也是为了应对同一个页面有多个地图的情况。
 * - 百度地图的文档及接口都比较混乱，与 GeoJSON 的规范也有出入，所以需要做一些转换。
 */

import { Point, MultiPoint, LineString, MultiLineString, Polygon } from '../packages/Geometry.ts';
import { fillIndexArray } from '../packages/constants/Utils.ts';

// disable ts error
declare var BMapGL: any;

export function createIcon(url: string, size: [number, number], offset: [number, number]) {
    return new BMapGL.Icon(url, new BMapGL.Size(size[0], size[1]), {
        offset: new BMapGL.Size(offset[0], offset[1])
    });
}

const myicons = [
    'shop.png',
    'shopg.png',
    'shopy.png',
    'shopr.png',
    'greenStar.svg',
    'bluePoint.svg',
    'redPoint.svg',
    'pinkPoint.svg',
    'person.png',
]


export function innerIcon(index: number, icons: string[] = myicons) {
    let url = icons[index];
    return new BMapGL.Icon(url, new BMapGL.Size(11, 11), {
        offset: new BMapGL.Size(5, 5)
    });
}

/**
 * 获取图标的 url
 * @param index - 图标索引
 * @param icons - 图标数组
 * @returns 
 */
export function innerIconURL(index: number, icons: string[] = myicons) {
    let url = icons[index];
    return url;
}


// Vector Layer

/**
 * 在 百度地图上 绘制点
 * @param point - 点或者经纬度数组 [lon, lat]
 * @param map - 百度地图实例
 * @param icon - 图标
 * @returns marker - 百度地图的 marker 对象
 */
export function drawPoint2BLMap(point: Point | [lon:number,lat:number] , map: any, icon?: any ) {
    // let blPoint = new BMapGL.Point(point.lon, point.lat);
    // let icon = new BMapGL.Icon('bluePoint.svg', new BMapGL.Size(11, 11), {
    //     offset: new BMapGL.Size(5, 5)
    //     });
    if(icon) {
        let blPoint = Point.isPoint(point) ? new BMapGL.Point(point.lon, point.lat) : new BMapGL.Point(point[0], point[1]);
        let marker = new BMapGL.Marker(blPoint, {icon: icon});
        map.addOverlay(marker);
        return marker;
    }else{
        let blPoint = Point.isPoint(point) ? new BMapGL.Point(point.lon, point.lat) : new BMapGL.Point(point[0], point[1]);
        let marker = new BMapGL.Marker(blPoint);
        map.addOverlay(marker);
        return marker;
    }
}

/**
 * 清除百度地图上所有的覆盖物
 * @param map 
 */
export function removeAllOverlay(map: any) {
    map.clearOverlays();
}

/**
 * 在 百度地图上 绘制多点
 * @param multiPoint - 多点
 * @param map - 百度地图实例
 * @param icon - 图标
 * @returns markers - 百度地图的 marker 对象数组
 */
export function drawMultiPoint2BLMap(multiPoint: MultiPoint | Point[], map: any, icon?: any) {
    let points = MultiPoint.isMultiPoint(multiPoint) ? multiPoint.coordinates : multiPoint;
    let markers = [];
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        let marker = drawPoint2BLMap(point, map, icon);
        markers.push(marker);
    }
    return markers;
}

export function drawRectangle2BLMap( rect : [minLon:number, minLat:number, maxLon:number, maxLat:number], map: any, style:Object = { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }) {
    let pStart = new BMapGL.Point(rect[0], rect[1]);
    let pEnd = new BMapGL.Point(rect[2], rect[3]);
    let rectangle = new BMapGL.Polygon([
        pStart,
        new BMapGL.Point(pEnd.lng, pStart.lat),
        pEnd,
        new BMapGL.Point(pStart.lng, pEnd.lat)
    ], style);  //创建矩形
    map.addOverlay(rectangle);   //增加矩形
}

export function drawLineString2BLMap(lineString: LineString | number[][], map: any, style:Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 },close:boolean = false) {
    // let points = lineString.coordinates;
    // 处理 LineString 和 number[] 两种情况
    let points = LineString.isLineString(lineString) ? lineString.toArray() : lineString;
    let blPoints = [];
    for (let i = 0; i < points.length; i++) {
        blPoints.push(new BMapGL.Point(points[i][0], points[i][1]));
    }
    if(close) blPoints.push(new BMapGL.Point(points[0][0], points[0][1]));
    let polyline = new BMapGL.Polyline(blPoints, style);   //创建折线
    map.addOverlay(polyline);   //增加折线
}

export function drawMultiLineString2BLMap(multiLineString: MultiLineString, map: any, style:Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
    let lineStrings = multiLineString.coordinates;
    for (let i = 0; i < lineStrings.length; i++) {
        let lineString = lineStrings[i];
        drawLineString2BLMap(lineString, map, style);
    }
}

export function drawPolygon2BLMap(polygon: Polygon | any[], map: any, style:Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {
    // let coordinates = polygon.toArray();
    let coordinates = Polygon.isPolygon(polygon) ? polygon.toArray() : polygon;
    let blPoints = [];
    for (let i = 0; i < coordinates.length; i++) {
        let tmp = [];
        for (let j = 0; j < coordinates[i].length; j++) {
            tmp.push(new BMapGL.Point(coordinates[i][j][0], coordinates[i][j][1]));
        }
        blPoints.push(tmp);
    }
    let blPolygon = new BMapGL.Polygon(blPoints, style);
    map.addOverlay(blPolygon);
}

export function drawPolygonArray2BLMap(polygonArray: Polygon[] | any[], map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {
    for (let i = 0; i < polygonArray.length; i++) {
        let polygon = polygonArray[i];
        drawPolygon2BLMap([polygon], map, style);
    }
}

export function drawTriangleEdge2BLMap(triangleEdge: any[][], map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {

    for (let i = 0; i < triangleEdge.length; i++) {
        let blPoints = [];
        for(let j = 0; j < triangleEdge[i].length; j++) {
                blPoints.push(new BMapGL.Point(triangleEdge[i][j][0], triangleEdge[i][j][1]));
        }
        // add the first point to the end of the array
        blPoints.push(new BMapGL.Point(triangleEdge[i][0][0], triangleEdge[i][0][1]));
        let polyline = new BMapGL.Polyline(blPoints, style);   //创建折线
        map.addOverlay(polyline);   //增加折线
    }

}

export function drawEdgeMap2BLMap(edgeMap: Map<number, number[][]>, map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5},close:boolean = false) {
    for (let [key, value] of edgeMap) {
        drawLineString2BLMap(value, map, style,close);
    }
}

export function drawSimplePolygon2Map(polygon: any[], map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {
    let blPoints = [];
    for (let i = 0; i < polygon.length; i++) {
        blPoints.push(new BMapGL.Point(polygon[i][0], polygon[i][1]));
    }
    let blPolygon = new BMapGL.Polygon(blPoints, style);
    map.addOverlay(blPolygon);
}

/**
 * 绘制道路
 * @param nodes - 节点 
 * @param edges - 起点 终点 权重
 * @param hightlight - 高亮的边
 * @param Source - 起点
 * @param Target - 终点
 * @param map - 百度地图实例
 * @param nodeIcon - 中间的节点图标
 * @param roadStyle - 道路样式
 * @param hightlightStyle - 高亮样式
 */
export function drawRoad2Map(
    nodes: [number, number][], // 节点
    edges: [number, number, number][], // 起点 终点 权重
    hightlight: number[], // 高亮节点 [0,1,2] ==> 0 --> 1 -->2
    map: any,
    nodeIcon: any = innerIcon(0),
    roadStyle: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5},
    hightlightStyle: Object = { strokeColor: "yellow", strokeWeight: 5, strokeOpacity: 0.5}
){
    // 绘制节点
    for(let i = 0; i < nodes.length; i++){
        // 若是起点和终点则跳过
        if(i === hightlight[0] || i === hightlight[hightlight.length - 1]) continue;
        drawPoint2BLMap(nodes[i],map,nodeIcon);
    }
    // 绘制路网
    for(let i = 0; i < edges.length; i++){
        let edge = edges[i];
        let start = nodes[edge[0]];
        let end = nodes[edge[1]];
        drawLineString2BLMap([start,end],map,roadStyle);
    }
    // 若有高亮边，则绘制高亮边
    if(hightlight.length > 0){
        let lineStrings = fillIndexArray(hightlight,nodes);
        drawLineString2BLMap(lineStrings,map,hightlightStyle,false);
        drawPoint2BLMap(lineStrings[0],map,innerIcon(4));
        drawPoint2BLMap(lineStrings[lineStrings.length - 1],map,innerIcon(2));
    }

}

/**
 * 绘制栅格图层
 * @param extent - [minLon, minLat, maxLon, maxLat]
 * @param getCanvas - 获取 canvas 的函数
 * @param map - 百度地图实例
 */
export function drawRaster2BLMap(
    extent: [number, number, number, number], // [minLon, minLat, maxLon, maxLat]
    getCanvas: ()=> HTMLCanvasElement,
    map: any
){
    // 创建叠加物显示的范围Bounds
    var pStart = new BMapGL.Point(extent[0], extent[1]);
    var pEnd = new BMapGL.Point(extent[2], extent[3]);
    var bounds = new BMapGL.Bounds(new BMapGL.Point(pStart.lng, pEnd.lat), 
                                    new BMapGL.Point(pEnd.lng, pStart.lat));
    // 创建地面叠加层实例
    var imgOverlay = new BMapGL.GroundOverlay(bounds, {
        type: 'canvas',
        url: getCanvas(),
        opacity: 0.8
    });
    // 叠加层添加到地图
    map.addOverlay(imgOverlay);
}