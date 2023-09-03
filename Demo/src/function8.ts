/**
 * 测试栅格数据渲染。注意：时间关系， RVGeo 2.0 尚未集成栅格数据，只能使用 1.0 版本的 RVGeo 进行渲染。
 */
import axios from 'axios';
import * as RV from '../src/packages/rvgeo.js'
export function function8(map:any){
    axios.get('dem.csv').then((res)=>{
        // let myCanvas = document.querySelector<HTMLCanvasElement>('#Raster')!;
        // myCanvas.height = 512;
        // myCanvas.width = 1024;

        // create canvas and add it to component
        let components = document.querySelector<HTMLDivElement>('#components')!;
        let myCanvas = document.createElement('canvas');
        myCanvas.height = 512;
        myCanvas.width = 512;
        components.appendChild(myCanvas);

        let data = RV.Raster.parser1(255,256,res.data);
        let sourceGrid = RV.Raster.fromMatrix(data);
        let grid2 = RV.Raster.fromMatrix(sourceGrid.getAccumulationFlow(1));
        let gridview2 = new RV.Renderer.GridView(myCanvas.getContext("2d"),grid2,0,512,512,0);
        grid2.reClassify_Binary_(30)
        let stt2 =new RV.Stastic(grid2.get1DArray());
        let colorramp = new RV.Renderer.ColorRamp(stt2);
        gridview2.draw(colorramp,myCanvas.height,myCanvas.width,true,"累积流量测试视图（重分类后）");
    })
}