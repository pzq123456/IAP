// 禁用 TS2304 检查器，因为我们将使用 require 语句
// @ts-nocheck
import { GeoFeatures2Arr, GeoPolygons2SimpleArr, readDataFromGeoJSON } from "./Abstract/MetaData";
import { Flow } from "./Components/Chart2";
import { drawMultiPoint2BLMap, drawSimplePolygon2Map, innerIcon } from "./helpers/BLDraw";
import { PointInsidePolygon } from "./packages/CGUtils";
import { N2C, showColorLegend } from "./packages/Colors";
import { SpherePolygonArea } from "./packages/Distance";

const color = [
    "#00FF00",
    "#0000FF",
    "#FF0000",
];
/**
 * PZQ
 */
export function function7(
    map: any,
){
    readDataFromGeoJSON("interests.json").then((res) => {
        let arr = GeoFeatures2Arr(res.data.features);
        let simPolygons = GeoPolygons2SimpleArr(arr);

        readDataFromGeoJSON("time1.json").then((res) => {
            let pois = GeoFeatures2Arr(res.data.features);
            let icon = innerIcon(0);
            drawMultiPoint2BLMap(pois,map,icon);

            let interests = simPolygons.slice(1,4); // 0 为总区域

            let result = []; // 三个区域的兴趣点
            let D = []; // 游客密度 人/ km^2
            for(let i = 0; i < interests.length ; i++){
                let temp = [];
                let count = 0; // 兴趣点个数
                for(let j = 0 ; j < pois.length ; j++){
                    if(
                        PointInsidePolygon(pois[j],interests[i])
                        ){
                        temp.push(pois[j]);
                        count++;
                    }
                }

                let area = SpherePolygonArea(interests[i]);
                console.log(area);
                D.push(count / area);
                result.push(temp);
            }

            result.forEach((item) => {
                drawMultiPoint2BLMap(item,map);
            });

            interests.forEach((item,index) => {
                drawSimplePolygon2Map(item,map,rapperColor(D[index],D));
            })
            showColorLegend(D,color);
            addCom2Page(document.querySelector<HTMLDivElement>('#components')!,D,['A','B','C']);
        });
    });


}

/**
 * 根据数值返回颜色(对象)
 * @param value - 数值
 * @param values - 数值范围(数组)
 * @returns - 颜色对象
 */
function rapperColor(value:number, values:number[]){
    let res = {fillColor: N2C(value,values,color) };
    return res;
}

function addCom2Page(
    fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!,
    data: number[],
    labels: string[],
  ){
    // 首先实例化组件
    const flowInfo = new Flow(data,['A','B','C'],'逐地点');
    // 然后将组件添加到页面中
    fatherContainer.appendChild(flowInfo);
  }