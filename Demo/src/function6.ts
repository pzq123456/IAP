import { drawRoad2Map } from "./helpers/BLDraw";
import { Dijkstra } from "./packages/Dijkstra";
import { haversine } from "./packages/Distance";
import { PathsCom } from "./Components/Paths";
import { removeAllOverlay } from "./helpers/BLDraw";
/**
 * QSF
 */
export function function6(map: any){
    console.log("function6");
    // 添加小组件
    addComPaths(document.querySelector<HTMLDivElement>('#components')!)
    const points = [
        //0
        [
            -104.98393311497367,
            39.74427367092693
        ],
        //1
        [
            -105.78195469386588,
            39.85051999503219
        ],
        //2
        [
            -106.03547779474128,
            39.482387555563406
        ],
        //3
        [
            -105.88735610143544,
            38.967321078824256
        ],
        //4
        [
            -104.82511486861435,
            38.82698371758465
        ],
        //5
        [
            -103.69402466699923,
            39.26239522694598
        ],
        //6
        [
            -104.3933395277067,
            39.48905794764724
        ],
        //7
        [
            -104.8808497481143,
            39.57897837531627
        ],
    ] as [number,number][];

    // const edges = [
    //     [0, 1],
    //     [1, 2],
    //     [2, 3],
    //     [0, 3],
    //     [0, 2],
    // ] as [number, number][];
    // const edges=[
    //     [0,1,6],
    //     [0,2,4],
    //     [0,3,6],
    //     [1,2,6],
    //     [2,3,10],
    // ]
    const edges = [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 7],
        [1, 2],
        [2, 3],
        [2, 7],
        [3, 4],
        [3, 7],
        [4, 6],
        [4, 7],
        [5, 6],
        [6, 7],
    ] as [number, number][];

    let paths_button = document.getElementById("paths_button");

    console.log("paths_button");
    console.log(paths_button);

    paths_button?.addEventListener('click',function(){
        removeAllOverlay(map)
        // 获取源点选项值
        var source = getSelecValue('#paths_selectSource')
        // 获取目标点选项值
        var target = getSelecValue('#paths_selectTarget')
        
        console.log(source,target)
        let EdgesWithWeight = addDistance2Edge(points, edges, haversine);
        console.log(EdgesWithWeight);
        let dijkstra = new Dijkstra(EdgesWithWeight, source);
        let [path, length] = dijkstra.dijkstra(target);
        path as number[];
        console.log(path);
        drawRoad2Map(points, edges, path, map)
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
    // 然后将组件添加到页面中
    fatherContainer.appendChild(pathsCom)
}

function getSelecValue (selectID:string) {
    // let startValue = document.getElementById("paths_select")
    // 获取<select>标签的引用
    let startSelect = document.querySelector<HTMLDivElement>(selectID);

    let selectValue = startSelect?.value;
    console.log("selectValue")
    console.log(selectValue)

    return selectValue
}
