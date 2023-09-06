/**
 * LJY
 */
import { MultiPoint } from './packages/Geometry.ts'
import { mockPoints } from "./tests/Mock";
import { removeAllOverlay,innerIcon,drawMultiPoint2BLMap,drawPoint2BLMap } from './helpers/BLDraw.ts';
import { K_means } from "./packages/Cluster";
import { Createheatmap } from "./helpers/BVGL.ts"

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
    
    let ps = mockPoints(100, Area);
    let mps = new MultiPoint(ps);
    let arr= mps.toArray();
    let data = [];//

    var view = new mapvgl.View({
        map: map
    });

    //绘制游客分布图
    removeAllOverlay(map);
    let icon = innerIcon(0);
    drawMultiPoint2BLMap(mps, map, icon);
    //聚类
    let groups = K_means(20,10,1000,arr);
    for(let i = 0 ; i < groups.length ; i++){

        let mps = new MultiPoint(groups[i]);
        //drawMultiPoint2BLMap(mps, map);
        let cent=mps.calculateCentroid();
        //drawPoint2BLMap(mps.calculateCentroid(), map);
        let lat=cent.lat;
        let lon=cent.lon;

        data.push({
            geometry:{
                type: 'Point',
                coordinates: [lon.toString(), lat.toString()]
            },
            properties:{
                count: (groups[i].length*15).toString()
                
            }
        })
    }
    console.log(data);

    //绘图
    Createheatmap(view,data);

}