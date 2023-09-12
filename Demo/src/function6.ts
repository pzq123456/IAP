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
        [0, 8],
        [1, 5],
        [1, 6],
        [2, 5],
        [2, 6],
        [2, 7],
        [3, 5],
        [3, 8],
        [4, 5],
        [4, 8],
        [7, 4],
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

    var all_Paths = Floyd()
    console.log(all_Paths)
    
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


function Floyd(){
    var graph = [];
    // 初始化操作，顶点点自身权重为0，到其他点权重初始化为无穷大
    for (let i = 0; i < 10; ++i) {
        graph.push([]);
        for (let j = 0; j < 10; ++j)
            graph[i].push(i == j ? 0 : 999999999);
    }

    for (let i = 1; i < 10; ++i) {
        graph[0][i] = graph[i][0] = parseInt(Math.random() * 9 + 1);
    }

    for (let k = 0; k < 10; ++k) {
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                if (graph[i][j] > graph[i][k] + graph[k][j])
                    graph[i][j] = graph[i][k] + graph[k][j]
            }
        }
    }
    return graph
}