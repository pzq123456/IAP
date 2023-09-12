import { drawRoad2Map } from "./helpers/BLDraw";
import { Dijkstra } from "./packages/Dijkstra";
import { haversine } from "./packages/Distance";
import { PathsCom } from "./Components/Paths";
import { removeAllOverlay } from "./helpers/BLDraw";
// import { Floyd_Warshall } from "./packages/Floyd";
import { Floyd_Warshall } from "./packages/Floyd";
import { innerIcon } from "./helpers/BLDraw";
/**
 * QSF
 */
export function function6(map: any){
    // 添加小组件
    let com = addComPaths(document.querySelector<HTMLDivElement>('#components')!);
    const points = [
        //0
        [-107.8557944859051, 38.68187126977591],
        //1
        [-107.89863213828417, 38.68346764721872],
        //2
        [-107.90412138519707, 38.652962277391765],
        //3
        [-107.88355010300452, 38.677532888179115],
        //4
        [-107.8771186222527, 38.66469348725289],
        //5
        [-107.8938079077475, 38.669333734486884],
        //6
        [-107.90821768107722, 38.671240598219185],
        //7
        [-107.87760708914527, 38.654903486216654],
        //8
        [-107.86596529487325, 38.67664310297528],
    ] as [number,number][];

    const edges = [
        [0, 1],
        [1, 6],
        [2, 5],
        [2, 6],
        [2, 7],
        [3, 5],
        [3, 8],
        [4, 5],
        
    ] as [number, number][];
    
    var EdgesWithWeight = addDistance2Edge(points, edges, haversine);

    let dijkstra_button = document.getElementById("dijkstra_button");
    let floyd_button = document.getElementById("floyd_button");
    
    console.log(floyd_button);

    dijkstra_button?.addEventListener('click',function(){
        removeAllOverlay(map)
        // 获取源点选项值
        var source = getSelecValue('#paths_selectSource')
        // 获取目标点选项值
        var target = getSelecValue('#paths_selectTarget')
        console.log(source,target)
        // var EdgesWithWeight = addDistance2Edge(points, edges, haversine);
        // console.log(EdgesWithWeight);
        let dijkstra = new Dijkstra(EdgesWithWeight, source);
        let [path, length] = dijkstra.dijkstra(target);
        path as number[];
        console.log(path);
        drawRoad2Map(points, edges, path, map)
    })

    floyd_button?.addEventListener('click',function(){
        removeAllOverlay(map)
        // 获取所有顶点的选项值
        let source = getSelecValue('#paths_selectVertices')
        // Floyd算法
        let floyd = new Floyd_Warshall(9, EdgesWithWeight)
        let paths:any[] = floyd.floyd_warshall()
        console.log(paths[source])
        
        // drawRoad2Map(points, edges, paths[source], map, innerIcon(0), Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 },)
        for(let i=0;i<paths[source].length;i++){
            // let color:any = setRandomColor(paths[source].length)
            // let color = setRandomColor(paths[source].length)
            drawRoad2Map(points, edges, paths[source][i], map, innerIcon(0), { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }, { strokeColor: getRandomColor(), strokeWeight: 5, strokeOpacity: 0.5 })
        }
        // console.log(setRandomColor(6))

    })

    
    
    
}

function addDistance2Edge(
    points: [number,number][],
    edges: [number,number][],
    distance: ()=>number
){
    let newEdges = [];
    for(let i = 0; i < edges.length; i++){
        let edge = edges[i];
        let start = points[edge[0]];
        let end = points[edge[1]];
        let dis = distance(start,end);
        newEdges.push([edge[0],edge[1],dis]);
    } 
    return newEdges;
}

function addComPaths(
    fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!
){
    // 首先实例化组件
    const pathsCom= new PathsCom(0,1);
    fatherContainer.appendChild(pathsCom)
    return pathsCom;
}

function getSelecValue (selectID:string) {
    // let startValue = document.getElementById("paths_select")
    // 获取<select>标签的引用
    let startSelect = document.querySelector<HTMLDivElement>(selectID);
    let selectValue = startSelect?.value;
    return selectValue
}

function getRandomColor() {
    const colors = ["red", "green", "yellow", "orange", "pink", "silver","white"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

