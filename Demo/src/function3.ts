import { GeoFeatures2Arr, GeoPolygons2SimpleArr, readDataFromGeoJSON } from "./Abstract/MetaData";
import { Flow } from "./Components/Chart2";
import { drawMultiPoint2BLMap, drawRoad2Map, drawSimplePolygon2Map, innerIcon, removeAllOverlay } from "./helpers/BLDraw";
import { PointInsidePolygon } from "./packages/CGUtils";
import { N2C, showColorLegend } from "./packages/Colors";
import { SpherePolygonArea } from "./packages/Distance";
import { createBtnList } from "./Components/BtnList";

/**
 * LM
 */

// const color = [
//     "#00FF00",
//     "#0000FF",
//     "#FF0000",
// ];
// 增加颜色的透明度 降低饱和度
const color = [
    "RGBA(0,255,0,0.3)",
    "RGBA(0,0,255,0.3)",
    "RGBA(255,0,0,0.3)",
];

export function function3(map: any){

    createBtnList([
        {'name': 'step1', 'action': () => step1(map)},
        {'name': 'step2', 'action': () => step2(map)},
        {'name': 'step3', 'action': () => step3(map)},
        {'name': 'step4', 'action': () => step4(map)},
        {'name': 'step5', 'action': () => map.clearOverlays()}
    ]);
}

function step1(map){ //加载数据
    // load data
    removeAllOverlay(map);//清空地图
    readDataFromGeoJSON("polygon.json").then((res) => {
        // 向地图上添加景点多边形
        let arr = GeoFeatures2Arr(res.data.features);
        let simPolygons = GeoPolygons2SimpleArr(arr);
        // 去掉第一个元素
        simPolygons = simPolygons.slice(1,simPolygons.length);
        simPolygons.forEach((item) => {
            drawSimplePolygon2Map(item,map,rapperColor(0,[0,1,2]));
        }
        );
    });
}

function step2(map){
    removeAllOverlay(map);//清空地图
    readDataFromGeoJSON("polygon.json").then((res) => {
        let arr = GeoFeatures2Arr(res.data.features);
        let simPolygons = GeoPolygons2SimpleArr(arr);
    });

    readDataFromGeoJSON("people1.json").then((res) => {
        //向地图上添加游客位置
        let pois = GeoFeatures2Arr(res.data.features);
        let icon = innerIcon(5);
        drawMultiPoint2BLMap(pois,map,icon);
    });
}

function step3(map){
    removeAllOverlay(map);//清空地图
    readDataFromGeoJSON("polygon.json").then((res) => {
        let arr = GeoFeatures2Arr(res.data.features);
        let simPolygons = GeoPolygons2SimpleArr(arr);

    readDataFromGeoJSON("people1.json").then((res) => {
        let pois = GeoFeatures2Arr(res.data.features);
        let icon = innerIcon(5);
         drawMultiPoint2BLMap(pois,map,icon);

        let interests = simPolygons.slice(1,simPolygons.length);

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

            // let area = SpherePolygonArea(interests[i]);
            D.push(count);
            result.push(temp);
        }
            
        });
    });
}

function step4(map){
    removeAllOverlay(map);//清空地图
    readDataFromGeoJSON("polygon.json").then((res) => {
        let arr = GeoFeatures2Arr(res.data.features);
        let simPolygons = GeoPolygons2SimpleArr(arr);

    readDataFromGeoJSON("people1.json").then((res) => {
        let pois = GeoFeatures2Arr(res.data.features);
        let icon = innerIcon(5);
         drawMultiPoint2BLMap(pois,map,icon);

        let interests = simPolygons.slice(1,simPolygons.length);

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

            // let area = SpherePolygonArea(interests[i]);
            D.push(count);
            result.push(temp);
        }

        result.forEach((item) => {
            drawMultiPoint2BLMap(item,map,innerIcon(6));
        });
    
        interests.forEach((item,index) => {
            drawSimplePolygon2Map(item,map,rapperColor(D[index],D));
        })
        showColorLegend(D,color);
        addCom2Page(document.querySelector<HTMLDivElement>('#components')!,D,['']);
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
    let res = {
        fillColor: N2C(value,values,color) ,
        strokeColor: N2C(value,values,color),
        strokeWeight: 2,
        strokeOpacity: 0.5,
        fillOpacity: 0.3
    };
    return res;
}

function addCom2Page(
    fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!,
    data: number[],
    labels: string[]
  ){
    // 首先实例化组件
    const flowInfo = new Flow(data,['A','B','C','D','E'],'逐地点');
    // 然后将组件添加到页面中
    fatherContainer.appendChild(flowInfo);
  }


    
// export function function3(
//     map: any,
// ){
//     removeAllOverlay(map);//清空地图
//     readDataFromGeoJSON("polygon.json").then((res) => {
//         let arr = GeoFeatures2Arr(res.data.features);
//         let simPolygons = GeoPolygons2SimpleArr(arr);

//         readDataFromGeoJSON("people1.json").then((res) => {
//             let pois = GeoFeatures2Arr(res.data.features);
//             let icon = innerIcon(5);
//             drawMultiPoint2BLMap(pois,map,icon);

//             let interests = simPolygons.slice(1,simPolygons.length);

//             let result = []; // 三个区域的兴趣点
//             let D = []; // 游客密度 人/ km^2
//             for(let i = 0; i < interests.length ; i++){
//                 let temp = [];
//                 let count = 0; // 兴趣点个数
//                 for(let j = 0 ; j < pois.length ; j++){
//                     if(
//                         PointInsidePolygon(pois[j],interests[i])
//                         ){
//                         temp.push(pois[j]);
//                         count++;
//                     }
//                 }

//                 // let area = SpherePolygonArea(interests[i]);
//                 D.push(count);
//                 result.push(temp);
//             }

//             result.forEach((item) => {
//                 drawMultiPoint2BLMap(item,map,innerIcon(6));
//             });

//             interests.forEach((item,index) => {
//                 drawSimplePolygon2Map(item,map,rapperColor(D[index],D));
//             })
//             showColorLegend(D,color);
//             addCom2Page(document.querySelector<HTMLDivElement>('#components')!,D,['']);
//         });
//     });


// }

// /**
//  * 根据数值返回颜色(对象)
//  * @param value - 数值
//  * @param values - 数值范围(数组)
//  * @returns - 颜色对象
//  */
// function rapperColor(value:number, values:number[]){
//     let res = {
//         fillColor: N2C(value,values,color) ,
//         strokeColor: N2C(value,values,color),
//         strokeWeight: 2,
//         strokeOpacity: 0.5,
//         fillOpacity: 0.3
//     };
//     return res;
// }

// function addCom2Page(
//     fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!,
//     data: number[],
//     labels: string[]
//   ){
//     // 首先实例化组件
//     const flowInfo = new Flow(data,['A','B','C','D','E'],'逐地点');
//     // 然后将组件添加到页面中
//     fatherContainer.appendChild(flowInfo);
//   }