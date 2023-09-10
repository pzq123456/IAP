/**
 * LJY
 */
import { MultiPoint } from './packages/Geometry.ts'
import { mockPoints } from "./tests/Mock";
import { removeAllOverlay,innerIcon,drawMultiPoint2BLMap,drawPoint2BLMap } from './helpers/BLDraw.ts';
import { K_means } from "./packages/Cluster";
import { Createheatmap } from "./helpers/BVGL.ts"
import { Weather } from "./Components/weather.ts";
import { GeoFeatures2Arr,readDataFromGeoJSON } from "./Abstract/MetaData.ts";

export function function5(map: any,view:any){
    //1.kmeans聚类
    //2.求聚类质心
    //3.热力图
    //参数

    removeAllOverlay(map);//清空地图
    view.removeAllLayers();
    
    let data = [];
    readDataFromGeoJSON("people1.json").then((res) => {
        let pois = GeoFeatures2Arr(res.data.features);
        let mps = new MultiPoint(pois);
        let arr= mps.toArray();
        console.log(arr);

        //聚类
        let groups = K_means(300,10,1000,arr);
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
                    count: (groups[i].length*0.06).toString()
                    
                }
            })
        }
        //绘图
        Createheatmap(view,data);
        drawMultiPoint2BLMap(pois,map,innerIcon(6));

    })
    
    //组件
    addCom2Page(document.querySelector<HTMLDivElement>('#components')!);
}

function addCom2Page(
    fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!,
  ){
    // 首先实例化组件
    const weatherinfo = new Weather();
    // 然后将组件添加到页面中
    fatherContainer.appendChild(weatherinfo);
  }