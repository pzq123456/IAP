/**
 * 数据读取模块
 */
import axios from "axios";

/**
 * 从 URL 中获取数据的 Promise
 * @param URL - 数据的 URL
 * @returns {Promise<any>}
 */
export function readDataFromGeoJSON(
    URL: string,
){
    return axios.get(URL);
}

/**
 * 从 GeoJSON 中获取点的数组
 * @param features - GeoJSON 中的 features
 * @returns {number[][]} - 点的数组
 */
export function GeoFeatures2Arr(features: any){
    let arr = [];
    features.forEach((feature: any) => {
        arr.push(feature.geometry.coordinates);
    });
    return arr;
}

/**
 * 将无洞的 GeoPolygon 转换为多维数组
 * @param features - GeoJSON 中的 features
 * @returns - 多维数组
 */
export function GeoPolygons2SimpleArr(
    features: any,
){
    let arr = features;
    let polygons = [];
    for(let i = 0 ; i < arr.length ; i++){
        let polygon;
        for(let j = 0 ; j < arr[i].length ; j++){
            polygon = arr[i][j];
        }
        polygons.push(polygon);
    }
    return polygons;
}