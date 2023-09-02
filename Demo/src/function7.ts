import { GeoFeatures2Arr, GeoPolygons2SimpleArr, readDataFromGeoJSON } from "./Abstract/MetaData";
import { drawMultiPoint2BLMap, drawSimplePolygon2Map, innerIcon } from "./helpers/BLDraw";
import { loadBaiDuMap } from "./helpers/initMap";
import { PointInsidePolygon } from "./packages/CGUtils";

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
            for(let i = 0; i < interests.length ; i++){
                let temp = [];
                for(let j = 0 ; j < pois.length ; j++){
                    if(
                        PointInsidePolygon(pois[j],interests[i])
                        ){
                        temp.push(pois[j]);
                    }
                }
                result.push(temp);
            }

            result.forEach((item) => {
                drawMultiPoint2BLMap(item,map);
            });

        });

        for(let i = 0 ; i < simPolygons.length ; i++){
            drawSimplePolygon2Map(simPolygons[i],map);
        }
    });
}