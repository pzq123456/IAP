/**
 * 测试栅格数据渲染。注意：时间关系， RVGeo 2.0 尚未集成栅格数据，只能使用 1.0 版本的 RVGeo 进行渲染。
 */
import axios from 'axios';
import * as RV from '../src/packages/rvgeo.js'
import { drawRaster2BLMap, removeAllOverlay } from './helpers/BLDraw.js';
export function function8(
    map:any,
    mould : number = 1
    ){
    removeAllOverlay(map);//清空地图
    axios.get('data.csv').then((res)=>{
        // create canvas and add it to component
        let components = document.querySelector<HTMLDivElement>('#components')!;
        let myCanvas = document.createElement('canvas');
        myCanvas.height = 191;
        myCanvas.width = 297;

        let data = parseData(res.data);
        let sourceGrid = RV.Raster.fromMatrix(data);
        let mbr = [-107.92357269467898,38.69203706472152,-107.84398506918498,38.640907812582896];
        drawRaster2BLMap(mbr,()=>myCanvas,map);

        switch(mould){
            case 1:
                mould1(myCanvas,sourceGrid);
                break;
            case 2:
                mould2(myCanvas,sourceGrid);
                break;
            case 3:
                mould3(myCanvas,sourceGrid);
                break;
            default:
                mould1(myCanvas,sourceGrid);
                break;
        }

        
    })

    createLegend();
}

function mould1(
    myCanvas:HTMLCanvasElement,
    sourceGrid:RV.Raster.Raster
){
    let sourceGridView = new RV.Renderer.GridView(myCanvas.getContext("2d"),sourceGrid,0,191,297,0);
    let stt =new RV.Stastic(sourceGrid.get1DArray());
    let colorramp = new RV.Renderer.ColorRamp(stt);
    sourceGridView.draw(colorramp,myCanvas.height,myCanvas.width,true,"地形渲染视图");
}

function mould2(
    myCanvas:HTMLCanvasElement,
    sourceGrid:RV.Raster.Raster
){
    

    let grid2 = RV.Raster.fromMatrix(sourceGrid.getFlowDirection());
    let gridview2 = new RV.Renderer.GridView(myCanvas.getContext("2d"),grid2,0,191,297,0);
    gridview2.draw_dispersed_custom(myCanvas.height,true,RV.pan.CellValueRenderer.Stadard_Aspact,"坡向测试视图",9,1,0.1,[0,1,2,4,8,16,32,64,128]);

}

function mould3(
    myCanvas:HTMLCanvasElement,
    sourceGrid: RV.Raster
){
    let grid2 = RV.Raster.fromMatrix(sourceGrid.getAccumulationFlow());
    let gridview2 = new RV.Renderer.GridView(myCanvas.getContext("2d"),grid2,0,191,297,0);
    let stt2 =new RV.Stastic(grid2.get1DArray());
    let colorramp2 = new RV.Renderer.ColorRamp(stt2);
    gridview2.draw(colorramp2,myCanvas.height,myCanvas.width,true,"累积流量测试视图（重分类后）");
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

function createLegend(
    father:HTMLDivElement = document.querySelector<HTMLDivElement>('.Legend')!,
){  
    // 首先清空
    father.innerHTML = '';
    // create canvas and add it to component
    let myCanvas = document.createElement('canvas');
    myCanvas.height = father.clientHeight;
    myCanvas.width = father.clientWidth;
    father.appendChild(myCanvas);

    anotationAspects(myCanvas.getContext("2d"),myCanvas.width/2,myCanvas.height/2);

}



/**
 * 坡向图例
 * @param myCanvas - canvas 对象 
 * @param x - 绘制坡向图例的 x 坐标
 * @param y - 绘制坡向图例的 y 坐标
 */
function anotationAspects(
    myCanvasCtx : any,
    x : number,
    y : number
    ){
    // 绘制坡向圆盘形状标注，颜色值根据 RV.pan.CellValueRenderer.Stadard_Aspact 计算得出
    // 坡向列表 [1,2,4,8,16,32,64,128] 对应的颜色值 由 RV.pan.CellValueRenderer.Stadard_Aspact 计算得出
    const colorramp = RV.pan.CellValueRenderer.Stadard_Aspact; // 颜色映射函数
    const aspect = [1,2,4,8,16,32,64,128];
    // 绘制圆盘，等分为8份，每份的颜色值由 RV.pan.CellValueRenderer.Stadard_Aspact 计算得出
    let center = [x,y];

    // 圆盘平分为8份，每份的角度
    let angle = 2*Math.PI/8;
    // 22.5 度 -> 0.39269908169872414
    let startAngle = - 0.39269908169872414;
    // 圆盘半径
    let radius = 50;
    // 绘制圆盘

    // 140 * 100

    for(let i=0;i<aspect.length;i++){
      let color = colorramp(aspect[i]);
      myCanvasCtx.beginPath();
      myCanvasCtx.fillStyle = color;
      myCanvasCtx.moveTo(x,y);
      // 从 - 22.5 度开始绘制，即正北方向
      myCanvasCtx.arc(x,y,radius,startAngle+i*angle,startAngle+(i+1)*angle);
      myCanvasCtx.fill();
      myCanvasCtx.closePath();
    }

    let textRadius = radius + 15;
    // 绘制坡向标注
    let text = ['N','NE','E','SE','S','SW','W','NW'];
    let textX = [x,x+textRadius/Math.sqrt(2),x+textRadius,x+textRadius/Math.sqrt(2),x,x-textRadius/Math.sqrt(2),x-textRadius,x-textRadius/Math.sqrt(2)];
    let textY = [y-textRadius,y-textRadius/Math.sqrt(2),y,y+textRadius/Math.sqrt(2),y+textRadius,y+textRadius/Math.sqrt(2),y,y-textRadius/Math.sqrt(2)];

    for(let i=0;i<text.length;i++){
      myCanvasCtx.beginPath();
      myCanvasCtx.fillStyle = 'black';
      myCanvasCtx.font = '10px serif';
      myCanvasCtx.fillText(text[i],textX[i],textY[i]);
      myCanvasCtx.closePath();
    }
}

function normalize(
    max : number,
    min : number,
    value : number
){
    return (value - min)/(max - min);
}

function normalize2D(
    array : number[][]
){
    let max = Math.max(...array.map((row)=>Math.max(...row)));
    let min = Math.min(...array.map((row)=>Math.min(...row)));
    let result = [];
    for(let row of array){
        let resultRow = [];
        for(let value of row){
            resultRow.push(normalize(max,min,value));
        }
        result.push(resultRow);
    }
    return result;
}