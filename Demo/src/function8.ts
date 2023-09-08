/**
 * 测试栅格数据渲染。注意：时间关系， RVGeo 2.0 尚未集成栅格数据，只能使用 1.0 版本的 RVGeo 进行渲染。
 */
import axios from 'axios';
import * as RV from '../src/packages/rvgeo.js'
import { drawRaster2BLMap } from './helpers/BLDraw.js';
export function function8(map:any){
    axios.get('data.csv').then((res)=>{
        // create canvas and add it to component
        let components = document.querySelector<HTMLDivElement>('#components')!;
        let myCanvas = document.createElement('canvas');
        myCanvas.height = 191;
        myCanvas.width = 297;
        components.appendChild(myCanvas);

        let data = parseData(res.data);
        console.log(data);


        let sourceGrid = RV.Raster.fromMatrix(data);
        // console.log(sourceGrid);
        // let grid2 = RV.Raster.fromMatrix(sourceGrid.getAccumulationFlow(1));
        let sourceGridView = new RV.Renderer.GridView(myCanvas.getContext("2d"),sourceGrid,0,191,297,0);
        // let gridview2 = new RV.Renderer.GridView(myCanvas.getContext("2d"),grid2,0,512,512,0);
        // grid2.reClassify_Binary_(30)
        // let stt2 =new RV.Stastic(grid2.get1DArray());
        let stt =new RV.Stastic(sourceGrid.get1DArray());
        console.log(stt);
        let colorramp = new RV.Renderer.ColorRamp(stt);
        // gridview2.draw(colorramp,myCanvas.height,myCanvas.width,true,"累积流量测试视图（重分类后）");
        sourceGridView.draw(colorramp,myCanvas.height,myCanvas.width,true,"累积流量测试视图");

        let mbr = [-107.92357269467898,38.69203706472152,-107.84398506918498,38.640907812582896];
        drawRaster2BLMap(mbr,()=>myCanvas,map);
    })
}


function parseData(data:string){
    let lines = data.split('\n');
    let result = [];
    for(let line of lines){
        let nums = line.split(',');
        let row = [];
        for(let num of nums){
            // 读取整型 若有 NAN 则替换为 0
            let n = parseInt(num);
            if(isNaN(n)){
                n = 0;
            }
            row.push(n);
        }
        result.push(row);
    }
    // 去掉最后一行
    result.pop();
    return result;
}