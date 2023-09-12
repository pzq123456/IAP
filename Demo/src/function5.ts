/**
 * LJY
 */
import { MultiPoint,LineString,Polygon } from './packages/Geometry.ts'
import { createPointListFromArr } from './packages/MetaData.ts'
import { mockPoints } from "./tests/Mock";
import { removeAllOverlay,innerIcon,drawMultiPoint2BLMap,drawPoint2BLMap,drawPolygon2BLMap,drawRectangle2BLMap } from './helpers/BLDraw.ts';
import { K_means } from "./packages/Cluster";
import { Createheatmap } from "./helpers/BVGL.ts"
import { Weather } from "./Components/weather.ts";
import { GeoFeatures2Arr,readDataFromGeoJSON } from "./Abstract/MetaData.ts";
import { createBtnList } from "./Components/BtnList";
import { convexHull } from './packages/Shell.ts';

export function function5(map: any,view:any){
    //1.kmeans聚类
    //2.求聚类质心
    //3.热力图
    //参数
    createBtnList([
        {'name': '加载数据', 'action': () => step1(map,view)},
        {'name': 'k-means聚类', 'action': () => step2(map,view)},
        {'name': '热力图', 'action': () => step3(map,view)},
        {'name': 'clear', 'action': () => clearview(map,view)},
        {'name': '天气', 'action': () => step4()}
    ]);

    // readDataFromGeoJSON("people1.json").then((res) => {
    //     let pois = GeoFeatures2Arr(res.data.features);
    //     let mps = new MultiPoint(pois);
    //     let arr= mps.toArray();

    //     //聚类
    //     let groups = K_means(300,10,1000,arr);
        
        
    //     drawMultiPoint2BLMap(pois,map,innerIcon(6));

    // })
    
}
function clearview(map:any,view:any){

    removeAllOverlay(map);//清空地图
    view.removeAllLayers();
}
function step1(map:any,view:any){
    //加载数据
    clearview(map,view);
    let data = [];
    readDataFromGeoJSON("people1.json").then((res) => {
        let pois = GeoFeatures2Arr(res.data.features);

        drawMultiPoint2BLMap(pois,map,innerIcon(6));
    })
}
function step2(map:any,view:any){
    clearview(map,view);
    //k-means聚类
    let data = [];
    readDataFromGeoJSON("people1.json").then((res) => {
        let pois = GeoFeatures2Arr(res.data.features);
        drawMultiPoint2BLMap(pois,map,innerIcon(6));//绘图
        let mps = new MultiPoint(pois);
        let arr= mps.toArray();
        let ps = createPointListFromArr(arr);
        let groups = K_means(50,10,1000,arr);

        for(let i = 0 ; i < groups.length ; i++){
            let mps = new MultiPoint(groups[i]);
            let arr = mps.toArray();
            if(arr.length>=3){
                ps = createPointListFromArr(arr);
                let ps2 = convexHull(ps);
                let ls = new LineString(ps2);
                let polygon = new Polygon([ls]);
                drawPolygon2BLMap(polygon, map);
            }


            let cent=mps.calculateCentroid();
            drawPoint2BLMap(cent, map);
        }
    })
}
function step3(map:any,view:any){
    //热力图
    clearview(map,view);
    let data = [];
    readDataFromGeoJSON("people1.json").then((res) => {
        let pois = GeoFeatures2Arr(res.data.features);
        let mps = new MultiPoint(pois);
        let arr= mps.toArray();
        let groups = K_means(30,10,1000,arr);
        Createdata(groups,data);
        //绘图
        Createheatmap(view,data);
    })
}
function step4(){
    addCom2Page(document.querySelector<HTMLDivElement>('#components')!);
}

function Createdata(groups:any,data:any){
    for(let i = 0 ; i < groups.length ; i++){
    
        let mps = new MultiPoint(groups[i]);
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
}

function addCom2Page(
    fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!,
  ){
    // 首先实例化组件
    const weatherinfo = new Weather();
    // 然后将组件添加到页面中
    fatherContainer.appendChild(weatherinfo);
  }
