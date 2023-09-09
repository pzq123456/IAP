import { GeoFeatures2Arr, readDataFromGeoJSON } from "./Abstract/MetaData";
import { drawMultiPoint2BLMap, drawPoint2BLMap, innerIcon, innerIconURL } from "./helpers/BLDraw";
import { haversine } from "./packages/Distance";
import { createMultiPointFromArr } from "./packages/MetaData";
import { showIconLegend } from "./packages/Colors";
import { Post } from "./Components/Post";

/**
 * ZQY
 */
export function function4(map: any){
    readDataFromGeoJSON("shop.json").then((res) => {
        let pois = GeoFeatures2Arr(res.data.features);
        let multip = createMultiPointFromArr(pois);
        let XMLoc = multip.calculateCentroid(); // 小明的位置
        let XMIcon = innerIcon(8);
        drawPoint2BLMap(XMLoc,map,XMIcon); // 绘制小明

        let icon = innerIcon(0);
        drawMultiPoint2BLMap(pois,map,icon); // 绘制商店

        // 计算距离
        let D = point2PointsDistance(XMLoc,pois);
        let bgcolor = [
            '#00FF00',
            '#FFFF00',
            '#FF0000'
        ]
        for(let i = 0; i < pois.length; i++){
            let color = distance2ColorIndex(i,D);
            let marker = drawPoint2BLMap(pois[i],map,innerIcon(color));

            // 添加点击事件
            marker.addEventListener('click',function(){
                // 创建组件
                const post = new Post(
                    bgcolor[color - 1],
                    D[i],
                    [1,2,3,4,5,6,5,4,3,2,1],
                    ['1','2','3','4','5','6','7','8','9','10','11'],
                    '餐饮摊位',
                    '时间'
                );
                // 然后将组件添加到地图上
                // document.body.appendChild(post);
                let infoWindow = new BMapGL.InfoWindow(post, {
                    width : 540,     // 信息窗口宽度
                    height: 430,     // 信息窗口高度
                });
                map.openInfoWindow(infoWindow,marker.getPosition());
            }
            )
        }

        showIconLegend(D,[innerIconURL(1),innerIconURL(2),innerIconURL(3)]);
    })
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

