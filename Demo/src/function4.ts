import { GeoFeatures2Arr, readDataFromGeoJSON } from "./Abstract/MetaData";
import { drawEdgeMap2BLMap, drawMultiPoint2BLMap, drawPoint2BLMap, drawPolygon2BLMap, drawTriangleEdge2BLMap, innerIcon, innerIconURL } from "./helpers/BLDraw";
import { haversine } from "./packages/Distance";
import { createMultiPointFromArr } from "./packages/MetaData";
import { showIconLegend } from "./packages/Colors";
import { Post } from "./Components/Post";
import { Delaunator, Voronoi, triangleCenter } from "./packages/Delaunay";
import { getPointsMBR } from "./packages/Geometry";
import { fillIndexArray } from "./packages/constants/Utils";
import { convertToMercators, convertToWgs84 } from "./packages/Referencing";
import { createBtnList } from "./Components/BtnList";

/**
 * ZQY
 */

const extend = 
    [
      [
        -107.96481533627262,
        38.716851546431684
      ],
      [
        -107.96481533627262,
        38.616574823524275
      ],
      [
        -107.81006857689933,
        38.616574823524275
      ],
      [
        -107.81006857689933,
        38.716851546431684
      ],
      [
        -107.96481533627262,
        38.716851546431684
      ]
    ];


export function function4(map: any){

    createBtnList([
        {'name': '加载数据', 'action': () => step1(map)},
        {'name': '计算狄罗妮三角网（及其中心点）', 'action': () => step2(map)},
        {'name': '根据三角网追踪Voronoi图并裁剪', 'action': () => step3(map)},
        {'name': '计算到当前点的距离并着色', 'action': () => step4(map)},
        {'name': 'clear', 'action': () => map.clearOverlays()}
    ]);
}

function step1(map){ // 加载数据
    // load data
    readDataFromGeoJSON("shop.json").then((res) => {
        // 向地图上添加点
        let pois = GeoFeatures2Arr(res.data.features);
        let icon = innerIcon(7);
        drawMultiPoint2BLMap(pois,map,icon); // 绘制商店
        let multip = createMultiPointFromArr(pois);
        let XMLoc = multip.calculateCentroid(); // 小明的位置
        let XMIcon = innerIcon(8);
        drawPoint2BLMap(XMLoc,map,XMIcon); // 绘制小明
    });
}

function step2(map){ // 求解狄罗妮三角网并计算三角形中心
    // load data
    readDataFromGeoJSON("shop.json").then((res) => {
        // 向地图上添加点
        let pois = GeoFeatures2Arr(res.data.features);
        let tmpPois = [...pois,...extend];
        let poiXY = convertToMercators(tmpPois);
        let del = Delaunator.from(poiXY);
        let trs = fillIndexArray(del.getTriangleIndices(), tmpPois);
        // draw triangle center
        for(let i = 0; i < trs.length; i++){
            let trc = triangleCenter(poiXY,del,i,convertToWgs84);
            drawPoint2BLMap(trc, map,innerIcon(4));
        }
        drawTriangleEdge2BLMap(trs, map, {strokeColor: 'blue', strokeWeight: 2, strokeOpacity: 0.5});
    });
}

function step3(map){ // 绘制voironoi图 裁剪
    // load data
    readDataFromGeoJSON("shop.json").then((res) => {
        // 向地图上添加点
        let pois = GeoFeatures2Arr(res.data.features);
        let tmpPois = [...pois,...extend];
        let poiXY = convertToMercators(tmpPois);
        let del = Delaunator.from(poiXY);
        let vor = new Voronoi(del);
        let voi = vor.cutVoronoiByMBR(getPointsMBR(pois));
        voi = delNullVoi(voi);

        drawPolygon2BLMap(voi.get(0),map,{ fillColor: "yellow", fillOpacity: 0.5 });
        drawEdgeMap2BLMap(voi, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
    });
}

function step4(map){ // 计算距离并着色
    readDataFromGeoJSON("shop.json").then((res) => {
        let pois = GeoFeatures2Arr(res.data.features);


        let tmpPois = [...pois,...extend];
        // let del = Delaunator.from(pois);
        // let trs = fillIndexArray(del.getTriangleIndices(), pois);
        // let trc = triangleCenter(pois,del,0);
        // drawPoint2BLMap(trc, map);
        // drawTriangleEdge2BLMap(trs, map, {strokeColor: 'blue'});

        // 添加四角远处的点 计算voironoi
        let poiXY = convertToMercators(tmpPois);
        console.log(poiXY);
        let del2 = Delaunator.from(poiXY);
        let vor = new Voronoi(del2);
        let voi = vor.cutVoronoiByMBR(getPointsMBR(pois));
        voi = delNullVoi(voi);
        // console.log(voi.get(0));
        // drawPolygon2BLMap([voi.get(4)],map,{ fillColor: "yellow", fillOpacity: 0.5 });
        // drawEdgeMap2BLMap(voi, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);

        let multip = createMultiPointFromArr(pois);
        let XMLoc = multip.calculateCentroid(); // 小明的位置
        let XMIcon = innerIcon(8);
        drawPoint2BLMap(XMLoc,map,XMIcon); // 绘制小明

        let icon = innerIcon(0);
        drawMultiPoint2BLMap(pois,map,icon); // 绘制商店

        // 计算距离
        let D = point2PointsDistance(XMLoc,pois);
        let bgcolor = [
            '#14b814',
            '#FFE171',
            '#FF0000'
        ];

        for(let i = 0; i < pois.length; i++){
            let color = distance2ColorIndex(i,D);
            let marker = drawPoint2BLMap(pois[i],map,innerIcon(color)); // 按照距离绘制商店（着色）

            // 绘制出 voi 区域并着色
            let tmpPoly = [voi.get(i)];

            drawPolygon2BLMap(tmpPoly,map,{ fillColor: bgcolor[color - 1], fillOpacity: 0.15, strokeColor: bgcolor[color - 1], strokeWeight: 2, strokeOpacity: 0.6 });
            // 添加点击事件
            marker.addEventListener('click',function(){
                // 创建组件
                const post = new Post(
                    bgcolor[color - 1],
                    D[i],
                    randomPeopleFlow(11),
                    ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00'],
                    `${i}-餐饮摊位`,
                    '时间'
                );
                // 然后将组件添加到地图上
                // document.body.appendChild(post);
                let infoWindow = new BMapGL.InfoWindow(post, {
                    width : 540,     // 信息窗口宽度
                    height: 430,     // 信息窗口高度
                });
                map.openInfoWindow(infoWindow,marker.getPosition());
            })

        }

        showIconLegend(D,[innerIconURL(1),innerIconURL(2),innerIconURL(3)]);
    });
}





function distance2ColorIndex(
    distanceIndex: number, // 距离
    D: number[], // 所有的距离
    colorIndexArr: number[] = [1,2,3]
){
    // 首先找到最大值和最小值并根据此计算比例
    let max = Math.max(...D);
    let min = Math.min(...D);
    let distance = D[distanceIndex];
    let ratio = (distance - min) / (max - min);
    // 根据比例计算颜色索引
    let colorIndex = Math.floor(ratio * (colorIndexArr.length - 1));
    return colorIndexArr[colorIndex];
}

function point2PointsDistance(
    point: any,
    points: any[]
){
    let res = [];
    for(let i = 0; i < points.length; i++){
        let distance = haversine(point,points[i]);
        res.push(distance);
    }
    return res;
}

// 随机生成人流量
function randomPeopleFlow(
    length: number
){
    // 使得人流量随时间均匀变化 正态分布
    let res = [];
    // 每次调用时添加随机干扰量
    let random = Math.random() * 0.1;
    let u = 0.5 + random;
    let o = 0.1;
    for(let i = 0; i < length; i++){
        let x = i / length;
        let y = normalDistribution(x,u,o);
        res.push(y);
    }
    return res;
}

// 正态分布
function normalDistribution(
    x: number,
    u: number,
    o: number
){
    let res = 1 / (o * Math.sqrt(2 * Math.PI)) * Math.exp(- (x - u) * (x - u) / (2 * o * o));
    return res;
}


function delNullVoi(
    voiMap : Map<number, number[][]>
){
    // 若voiMap中的voi为空 则删除
    for(let [key,value] of voiMap){
        if(value.length == 0){
            voiMap.delete(key);
        }
    }
    return voiMap;
}