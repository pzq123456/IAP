/**
 * LJY
 */
import { MultiPoint } from './packages/Geometry.ts'
import { mockPoints } from "./tests/Mock";
import { removeAllOverlay,innerIcon,drawMultiPoint2BLMap,drawPoint2BLMap } from './helpers/BLDraw.ts';
import { K_means } from "./packages/Cluster";

export function function5(map: any){
    // //1.kmeans聚类
    // //2.求聚类质心
    // //3.热力图
    // //参数
    // const Area = [
    //     -109.07111505279033,
    //     36.990057191562045,
    //     -102.06399125241506,
    //     40.981780653665425
    // ] as [number, number, number, number];
    
    // let ps = mockPoints(50, Area);
    // let mps = new MultiPoint(ps);
    // let arr= mps.toArray();
    // let data = [];//

    // // //绘制游客分布图
    // removeAllOverlay(map);
    // let icon = innerIcon(0);
    // //drawMultiPoint2BLMap(mps, map, icon);
    // // //聚类
    // let groups = K_means(10,10,1000,arr);
    // for(let i = 0 ; i < groups.length ; i++){

    //     let mps = new MultiPoint(groups[i]);
    //     drawMultiPoint2BLMap(mps, map);
    //     let cent=mps.calculateCentroid();
    //     //drawPoint2BLMap(mps.calculateCentroid(), map);
    //     let lat=(cent.lat*100000).toFixed(0);
    //     let lon=(cent.lon*100000).toFixed(0);

    //     data.push({
    //         geometry:{
    //             type: 'Point',
    //             coordinates: [lon.toString(), lat.toString()]
    //         },
    //         properties:{
    //             count: groups[i].length
    //         }
    //     })
    // }
    // console.log(data);

    // //绘图
    // var view = new mapvgl.View({
    //     map: map
    // });
    // var heatmap = new mapvgl.HeatmapLayer({
    //     size: 600, // 单个点绘制大小
    //     max: 40, // 最大阈值
    //     height: 0, // 最大高度，默认为0
    //     unit: 'm', // 单位，m:米，px: 像素
    //     gradient: { // 对应比例渐变色
    //         0.25: 'rgba(0, 0, 255, 1)',
    //         0.55: 'rgba(0, 255, 0, 1)',
    //         0.85: 'rgba(255, 255, 0, 1)',
    //         1: 'rgba(255, 0, 0, 1)'
    //     }
    // });
    // view.addLayer(heatmap);
    // heatmap.setData(data);


    //测试
    // console.log("function5");






    // 2. 创建MapVGL图层管理器
    var view = new mapvgl.View({
        map: map
    });

    // 3. 创建可视化图层，并添加到图层管理器中
    var layer = new mapvgl.PointLayer({
        color: 'rgba(50, 50, 200, 1)',
        blend: 'lighter',
        size: 2
    });
    view.addLayer(layer);

    // 4. 准备好规范化坐标数据
    var data = [{
        geometry: {
            type: 'Point',
            coordinates: [116.403748, 39.915055]
        }
    }];

    // 5. 关联图层与数据，享受震撼的可视化效果
    layer.setData(data);
}