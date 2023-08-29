/**
 * 用于实现聚类算法
 */

/**
 * 获取 centroid 质心
 * @returns {array} - 返回一个一维向量
 */
get_centroid(){
}

/**
 * k均值聚类
 * @param {number} k - 分类个数
 * @param {number} thresh - 质心间变化距离
 * @param {number} maxtime - 最大迭代次数
 * @returns 
 * * `groups.length = k` :[
 * [group1],
 * [group2],...
 * ]
 */
K_means(k,thresh,maxtime){
    /*
    1.从样本中选择 K 个点作为初始质心（完全随机）
    2.计算每个样本到各个质心的距离，将样本划分到距离最近的质心所对应的簇中
    3.计算每个簇内所有样本的均值，并使用该均值更新簇的质心
    4.重复步骤 2 与 3 ，直到达到以下条件之一：
        质心的位置变化小于指定的阈值（默认为 0.0001）;
        达到最大迭代次数
    */
}