/**
 * 用于实现聚类算法
 */
import { haversine } from "./Distance";
import { randomIndexArray } from "./constants/Utils";

/**
 * 获取 centroid 质心
 * @param {array} points - 二维数组
 * @returns {array} - 返回一个一维向量
 */
function get_centroid(
    points : number[][]
){
    let len = points.length;
    let sum_x = 0;
    let sum_y = 0;
    for(let i = 0 ; i < len ; i++){
        sum_x += points[i][0];
        sum_y += points[i][1];
    }
    return [sum_x/len,sum_y/len];
}

/**
 * k均值聚类
 * @param {number} k - 分类个数
 * @param {number} thresh - 质心间变化距离
 * @param {number} maxtime - 最大迭代次数
 * @param {array} points - 二维数组
 * @returns 
 * * `groups.length = k` :[
 * [group1],
 * [group2],...
 * ]
 */
export function K_means(k,thresh,maxtime,points){
    /*
    1.从样本中选择 K 个点作为初始质心（完全随机）
    2.计算每个样本到各个质心的距离，将样本划分到距离最近的质心所对应的簇中
    3.计算每个簇内所有样本的均值，并使用该均值更新簇的质心
    4.重复步骤 2 与 3 ，直到达到以下条件之一：
        质心的位置变化小于指定的阈值（默认为 0.0001）;
        达到最大迭代次数
    */
    // 1.从样本中选择 K 个点作为初始质心（完全随机）
    let centroids = [];
    let len = points.length;
    let indexArray = randomIndexArray(len,k);
    indexArray.forEach((item) => {
        centroids.push(points[item]);
    }
    );
    // 2.计算每个样本到各个质心的距离，将样本划分到距离最近的质心所对应的簇中
    let groups = [];
    for(let i = 0 ; i < k ; i++){
        groups.push([]);
    }
    let flag = true;
    let time = 0;
    while(flag){
        // 2.1 清空 groups
        for(let i = 0 ; i < k ; i++){
            groups[i] = [];
        }
        // 2.2 计算每个样本到各个质心的距离，将样本划分到距离最近的质心所对应的簇中
        for(let i = 0 ; i < len ; i++){
            let min = Infinity;
            let min_index = 0;
            for(let j = 0 ; j < k ; j++){
                let tmp = haversine(points[i],centroids[j]);
                if(tmp < min){
                    min = tmp;
                    min_index = j;
                }
            }
            groups[min_index].push(points[i]);
        }
        // 2.3 计算每个簇内所有样本的均值，并使用该均值更新簇的质心
        let new_centroids = [];
        for(let i = 0 ; i < k ; i++){
            new_centroids.push(get_centroid(groups[i]));
        }
        // 2.4 判断是否达到终止条件
        let max_dis = 0;
        for(let i = 0 ; i < k ; i++){
            let tmp = haversine(centroids[i],new_centroids[i]);
            if(tmp > max_dis){
                max_dis = tmp;
            }
        }
        if(max_dis < thresh){
            flag = false;
        }
        centroids = new_centroids;
        time++;
        if(time > maxtime){
            flag = false;
        }
    }

    return groups;
}