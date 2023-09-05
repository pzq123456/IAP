import { drawRoad2Map } from "./helpers/BLDraw";
import { Dijkstra } from "./packages/Dijkstra";
import { haversine } from "./packages/Distance";
import { PathsCom } from "./Components/Paths";
/**
 * QSF
 */
export function function6(map: any){
    console.log("function6");
    // // Testing algorithm
    // let graph = []
    // graph.push([0, 1, 7])
    // graph.push([0, 2, 9])
    // graph.push([0, 5, 14])
    // graph.push([1, 2, 10])
    // graph.push([1, 3, 15])
    // graph.push([2, 3, 11])
    // graph.push([2, 5, 2])
    // graph.push([3, 4, 6])
    // graph.push([4, 5, 9])
    // 添加小组件
    addComPaths(document.querySelector<HTMLDivElement>('#components')!)
    const points = [
        [
            -108.09402257886713,
            39.83360180208061
        ],
        [
            -103.1154647370254,
            39.91358732061801
        ],
        [
            -103.74880784411923,
            38.20807776423709
        ],
        [
            -106.91552337959027,
            38.854030876050075
        ]
    ] as [number,number][];

    const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [0, 3],
        [0, 2],
    ] as [number, number][];

    // 获取源点选项值
    var source = getSelecValue('#paths_selectSource')
    // 获取目标点选项值
    var target = getSelecValue('#paths_selectTarget')
    // getSelecValue('#paths_selectSource')/
    // console.log(source,target)
    let paths_button = document.getElementById("paths_button")
    paths_button?.addEventListener('click',function(){
        // let pathsSelectValue=[source,target]
        console.log(source,target)
        let EdgesWithWeight = addDistance2Edge(points, edges, haversine);
        console.log(EdgesWithWeight);
        let dijkstra = new Dijkstra(EdgesWithWeight, source);
        let [path, length] = dijkstra.dijkstra(target);
        path as number[];
        console.log(path);
        drawRoad2Map(points, edges, path, map)
    })
        

    
    // let paths_button = document.getElementById("paths_button")
    // paths_button?.addEventListener('click',())=>{
    // })
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
// const getSelecValue=(selectID:string)=>{
//     // let startValue = document.getElementById("paths_select")
//     // 获取<select>标签的引用
//     const startSelect = document.getElementById(selectID);
//     //获取select对象： 
//     // var Sel = document.getElementById("citySel");
//     //2：取到选中项的索引：
//     var startIndex = startSelect.selectedIndex;             // selectedIndex是所选中的项的index
//    // 3：获取选中项的value：  
//     var selectValue = startSelect.options[startIndex].value;
//     // return selectValue
//     console.log(selectValue)
//     return selectValue
// }


function getSelecValue (selectID:string) {
    // let startValue = document.getElementById("paths_select")
    // 获取<select>标签的引用
    let startSelect = document.querySelector<HTMLDivElement>(selectID)
    // let startSelect = document.getElementById("paths_selectTarget");
    //获取select对象： 
    // var Sel = document.getElementById("citySel");
    //2：取到选中项的索引：
    var startIndex = startSelect.selectedIndex;             // selectedIndex是所选中的项的index
    // 3：获取选中项的value：  
    var selectValue = startSelect.options[startIndex].value;
    // return selectValue
    // console.log(selectValue)
    return selectValue
}
