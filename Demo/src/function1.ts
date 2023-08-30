import { GeoFeatures2Arr, readDataFromGeoJSON } from "./Abstract/MetaData";
import { randomIndexArray } from "./packages/constants/Utils";

export function example9(){
    readDataFromGeoJSON("points.json").then((res) => {
        let arr = GeoFeatures2Arr(res.data.features);
        console.log(arr);
    });
}