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
        [0,1],
        [1,2],
        [2,3],
        [0,3],
        [0,2],
    ] as [number,number][];

    const EdgesWithWeight = addDistance2Edge(points,edges,haversine);
    console.log(EdgesWithWeight);
    let dijkstra = new Dijkstra(EdgesWithWeight, 2);
    let [path, length] = dijkstra.dijkstra(0);
    path as number[];
    console.log(path);
    drawRoad2Map(points,edges,path,map)

    // 添加小组件
    addComPaths(document.querySelector<HTMLDivElement>('#components')!)
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
    const pathsCom=new PathsCom()
    // 然后将组件添加到页面中
    fatherContainer.appendChild(pathsCom)
}
