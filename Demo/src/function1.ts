import { GeoFeatures2Arr, readDataFromGeoJSON } from "./Abstract/MetaData";
import { drawMultiPoint2BLMap, drawPolygon2BLMap, innerIcon } from "./helpers/BLDraw";
import { K_means } from "./packages/Cluster";
import { haversine } from "./packages/Distance";
import { LineString, MultiPoint, Polygon } from "./packages/Geometry";
import { convexHull } from "./packages/Shell";
import { randomIndexArray } from "./packages/constants/Utils";

export function example9(map: any){
    readDataFromGeoJSON("points.json").then((res) => {
        let arr = GeoFeatures2Arr(res.data.features);
        // console.log(haversine(arr[0],arr[1]));
        // console.log(arr);
        // console.log(arr);
        let groups = K_means(3,10,1000,arr);
        // console.log(groups);
        let colors = ["#0000FF","#FF0000","#00FF00"];
        for(let i = 0 ; i < groups.length ; i++){
            let mps = new MultiPoint(groups[i]);
            let icon = innerIcon(i);
            drawMultiPoint2BLMap(mps, map, icon);
            let convexPoints = convexHull(mps.coordinates);
            let ls = new LineString(convexPoints);
            let polygon = new Polygon([ls]);
            drawPolygon2BLMap(polygon, map, {fillColor: colors[i]});
        }
    });
}