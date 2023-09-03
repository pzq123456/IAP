import 'https://cdn.jsdelivr.net/npm/chart.js';
declare var Chart: any;
export class About extends HTMLElement {
    data: number[];
    labels: string[];
    name: string;
    axisX: string;
    constructor(
        data: number[],
        labels: string[],
        name: string,
        axisX: string = '地点',
    ) {
        // Always call super first in constructor
        super();
        // 使用 template 的 innerHTML 設定樣板
        this.innerHTML = `
        <div class="chart-container" style="position: relative; height:400px; width:500px">
            <canvas id="myChart"></canvas>
            <button id="close">关闭</button>
        </div>
        `;
        // 为按钮添加点击事件
        // this.querySelector('#close')!.addEventListener('click', () => {
        //     this.remove();
        // });
        this.data = data;
        this.labels = labels;
        this.name = name;
        this.axisX = axisX;
    }
    /**
     * 挂载到 DOM 时被调用
     */
    connectedCallback() {
        let data = this.data;
        let labels = this.labels;
        let name = this.name;
        let axisX = this.axisX;
        let canvas = this.querySelector('#myChart');
        let chart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '游客人数',
                    data: data,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: name+'-人流量',
                        font: {
                            size: 20,
                        },
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                        display: true,
                        text: axisX,
                        font: {
                            size: 20,
                            weight: 'bold',
                            lineHeight: 1.2,
                        },
                        }
                    },
                    y: {
                        display: true,
                        title: {
                        display: true,
                        text: '人数',
                        font: {
                            size: 20,
                            weight: 'bold',
                            lineHeight: 1.2,
                        },
                        }
                    }
                    }
            },
        });
    }
}