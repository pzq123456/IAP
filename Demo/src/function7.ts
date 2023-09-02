import { GeoFeatures2Arr, GeoPolygons2SimpleArr, readDataFromGeoJSON } from "./Abstract/MetaData";
import { drawMultiPoint2BLMap, drawSimplePolygon2Map, innerIcon } from "./helpers/BLDraw";
import { loadBaiDuMap } from "./helpers/initMap";
import { PointInsidePolygon } from "./packages/CGUtils";
import { SpherePolygonArea } from "./packages/Distance";
import { LineString } from "./packages/Geometry";
import { createPointListFromArr } from "./packages/MetaData";

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
            console.log(D);

            result.forEach((item) => {
                drawMultiPoint2BLMap(item,map);
            });

        });

        for(let i = 0 ; i < simPolygons.length ; i++){
            drawSimplePolygon2Map(simPolygons[i],map);
        }
    });
}