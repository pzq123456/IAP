/**
 * LJY
 */
import { MultiPoint } from './packages/Geometry.ts'
import { mockPoints } from "./tests/Mock";
import { removeAllOverlay,innerIcon,drawMultiPoint2BLMap } from './helpers/BLDraw.ts';
import { K_means } from "./packages/Cluster";

export function function5(map: any){
    //1.kmeans聚类
    //2.求聚类质心
    //3.热力图
    //参数
    const Area = [
        -109.07111505279033,
        36.990057191562045,
        -102.06399125241506,
        40.981780653665425
    ] as [number, number, number, number];
    
    let ps = mockPoints(50, Area);
    let mps = new MultiPoint(ps);
    let arr= mps.toArray();

    // //绘制游客分布图
    removeAllOverlay(map);
    let icon = innerIcon(0);
    //drawMultiPoint2BLMap(mps, map, icon);
    // //聚类
    let groups = K_means(3,10,1000,arr);
    for(let i = 0 ; i < groups.length ; i++){

        let mps = new MultiPoint(groups[i]);
        drawMultiPoint2BLMap(mps, map);
    }


    //测试
    // console.log("function5");

}