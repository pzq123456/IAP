import { Dijkstra } from "./packages/Dijkstra";

/**
 * QSF
 */
export function function6(){
    // console.log("function6");
    //Testing algorithm
    let graph = []
    graph.push([0, 1, 7])
    graph.push([0, 2, 9])
    graph.push([0, 5, 14])
    graph.push([1, 2, 10])
    graph.push([1, 3, 15])
    graph.push([2, 3, 11])
    graph.push([2, 5, 2])
    graph.push([3, 4, 6])
    graph.push([4, 5, 9])

    let dijkstra = new Dijkstra(graph, 0)

    let [path, length] = dijkstra.dijkstra(4)
    console.log(path) //[ 'a', 'c', 'f', 'e' ]
    console.log(length) //20
}

// let points = [
//     [0,0], // 0
//     [1,1], // 1
//     [2,2], // 2
// ]

// let edges = [
//     [0,1,1] , // 0
//     [1,2,10] , // 1
// ]




