export class Floyd_Warshall {
    n: number
    edge: any[][]
    constructor(n: number, edge: any[][]) {
        this.n = n
        this.edge = edge
    }

    floyd_warshall() {
        const rn = Array.from({ length: this.n }, (_, i) => i);
        const inf = Infinity;
        const dist = Array.from({ length: this.n }, () => Array(this.n).fill(inf));
        const nxt = Array.from({ length: this.n }, () => Array(this.n).fill(0));

        for (let i of rn) {
            dist[i][i] = 0;
        }

        for (let [u, v, w] of this.edge) {
            dist[u][v] = w;
            nxt[u][v] = v;
        }

        for (let k of rn) {
            for (let i of rn) {
                for (let j of rn) {
                    const sum_ik_kj = dist[i][k] + dist[k][j];
                    if (dist[i][j] > sum_ik_kj) {
                        dist[i][j] = sum_ik_kj;
                        nxt[i][j] = nxt[i][k];
                    }
                }
            }
        }
        const paths: any = {};

        for (let i of rn) {
            paths[i] = [];
            for (let j of rn) {
                if (i !== j) {
                    const path = [i];
                    // 如当前结点为0的话
                    let currentNode = i;
                    while (currentNode !== j) {
                        const nextNode = nxt[currentNode][j];
                        if (path.includes(nextNode)) {
                            // Detected a cycle, exit the loop
                            break;
                        }
                        path.push(nextNode);
                        currentNode = nextNode;
                    }
                    if (currentNode === j) {
                        paths[i].push(path);
                    }
                }
            }
        }

        return Object.values(paths);



    }
}