import { formToJSON } from "axios";
import { GeoFeatures2Arr, readDataFromGeoJSON } from "./Abstract/MetaData";
import { drawMultiPoint2BLMap, drawPoint2BLMap, innerIcon, innerIconURL } from "./helpers/BLDraw";
import { haversine } from "./packages/Distance";
import { createMultiPointFromArr } from "./packages/MetaData";
import { showIconLegend } from "./packages/Colors";

/**
 * ZQY
 */
export function function4(map: any){
    // console.log("function4");
    readDataFromGeoJSON("time1.json").then((res) => {
        let pois = GeoFeatures2Arr(res.data.features);
        let multip = createMultiPointFromArr(pois);
        let XMLoc = multip.calculateCentroid(); // 小明的位置
        drawPoint2BLMap(XMLoc,map);

        let icon = innerIcon(0);
        drawMultiPoint2BLMap(pois,map,icon); // 绘制商店

        // 计算距离
        let D = point2PointsDistance(XMLoc,pois);
        console.log(D);
        let color = distance2ColorIndex(10,D);
        console.log(color);

        for(let i = 0; i < pois.length; i++){
            let color = distance2ColorIndex(i,D);
            drawPoint2BLMap(pois[i],map,innerIcon(color));
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

