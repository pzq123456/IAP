/**
 * QSF
 */
export function function6(){
    console.log("function6");
    //Testing algorithm
    let graph = []
    graph.push(["a", "b", 7])
    graph.push(["a", "c", 9])
    graph.push(["a", "f", 14])
    graph.push(["b", "c", 10])
    graph.push(["b", "d", 15])
    graph.push(["c", "d", 11])
    graph.push(["c", "f", 2])
    graph.push(["d", "e", 6])
    graph.push(["e", "f", 9])

    let dijkstra = new Dijkstra(graph, "a")

    let [path, length] = dijkstra.dijkstra("e")
    console.log(path) //[ 'a', 'c', 'f', 'e' ]
    console.log(length) //20
}


/**
     * Dijkstra算法
     * @param edgess:[][]：有向、无向带权图边点信息
     * 格式：["a","c",7]
     * @param source:number|string：源点
     */
export class Dijkstra {
    /**
     * 
     * @param edges:[][]
     * @param source :number|string：源点
     */
    constructor(edges, source) {
        this.edges = edges
        this.source = source
    }
    /**
     *dijstra——寻找源点至目标点的路径
     * @param target ：number|string：目标点
     * @returns [paths,length]——源点到目标点的路径和距离(总权重)
     */
    dijkstra = (target) => {
        const Q = new Set(),
            // 存放未访问的顶点
            prev = {},
            // 存放所有起点到其他点的权重
            dist = {},
            // 存放邻居节点
            adj = {}

        const vertex_with_min_dist = (Q, dist) => {
            let min_distance = Infinity,
                // u为源到其他未访问的最小权重的点
                u = null

            for (let v of Q) {
                if (dist[v] < min_distance) {
                    min_distance = dist[v]
                    u = v
                }
            }
            return u
        }
        // 构建有权无向图邻接矩阵
        for (let i = 0; i < this.edges.length; i++) {
            // v1起点 v2终点 len权重
            let v1 = this.edges[i][0],
                v2 = this.edges[i][1],
                len = this.edges[i][2]

            Q.add(v1)
            Q.add(v2)

            dist[v1] = Infinity
            dist[v2] = Infinity

            if (adj[v1] === undefined) adj[v1] = {}
            if (adj[v2] === undefined) adj[v2] = {}

            adj[v1][v2] = len
            adj[v2][v1] = len
        }
        // 将起点的距离表置0，其余置为infition无穷
        // 然后扫描起点与邻接点的距离，找到最短距离的点，将该点在unvisited中去除
        dist[this.source] = 0

        while (Q.size) {
            // u
            let u = vertex_with_min_dist(Q, dist),
                // 找到当前点的邻接点
                neighbors = Object.keys(adj[u]).filter(v => Q.has(v)) //Neighbor still in Q 
            Q.delete(u)
            // 找到终点就终止
            if (u === target) break //Break when the target has been found
            // 更新当前表格
            for (let v of neighbors) {
                let alt = dist[u] + adj[u][v]
                if (alt < dist[v]) {
                    dist[v] = alt
                    prev[v] = u
                }
            }
        }

        {
            let u = target,
                paths = [u],
                len = 0

            while (prev[u] !== undefined) {
                paths.unshift(prev[u])
                len += adj[u][prev[u]]
                u = prev[u]
            }
            return [paths, len]
        }
    }
}


