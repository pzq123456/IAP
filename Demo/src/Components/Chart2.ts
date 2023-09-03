import 'https://cdn.jsdelivr.net/npm/chart.js';
declare var Chart: any;
export class Flow extends HTMLElement {
    data: number[];
    labels: string[];
    name: string;
    constructor(
        data: number[],
        labels: string[],
        name: string,
    ) {
        // Always call super first in constructor
        super();
        // 使用 template 的 innerHTML 設定樣板
        this.innerHTML = `
        <div class="chart-container" style="position: relative; height:400px; width:450px">
            <canvas id="myChart"></canvas>
        </div>
        `;

        this.data = data;
        this.labels = labels;
        this.name = name;
    }
    /**
     * 挂载到 DOM 时被调用
     */
    connectedCallback() {
        let data = this.data;
        let labels = this.labels;
        let name = this.name;
        let canvas = this.querySelector('#myChart');
        let chart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '游客人数',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: name+'-逐小时人流量',
                        font: {
                            size: 20
                        },
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                        display: true,
                        text: '时间',
                        font: {
                            size: 10,
                            weight: 'bold',
                            lineHeight: 1.2,
                        },

                        padding: {top: 20, left: 0, right: 0, bottom: 0}
                        }
                    },
                    y: {
                        display: true,
                        title: {
                        display: true,
                        text: '人数',
                        font: {
                            size: 10,
                            weight: 'bold',
                            lineHeight: 1.2,
                        },
                
                        padding: {top: 30, left: 0, right: 0, bottom: 0}
                        }
                    }
                    }
            },
        });
    }
}