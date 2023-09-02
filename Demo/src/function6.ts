import { drawRoad2Map } from "./helpers/BLDraw";
import { Dijkstra } from "./packages/Dijkstra";

/**
 * QSF
 */
export function function6(map: any){
    // console.log("function6");
    //Testing algorithm
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

    // let dijkstra = new Dijkstra(graph, 0)

    // let [path, length] = dijkstra.dijkstra(4)
    // console.log(path) //[ 'a', 'c', 'f', 'e' ]
    // console.log(length) //20

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
        [0,1,10],
        [1,2,10],
        [2,3,10],
        [3,0,10],
        [0,2,10],
        [1,3,10]
    ] as [number,number,number][];

    drawRoad2Map(points,edges,[0,1,2,3],map)
}





