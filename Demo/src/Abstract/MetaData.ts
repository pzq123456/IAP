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