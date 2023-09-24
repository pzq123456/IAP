// 禁用 TS2304 检查器，因为我们将使用 require 语句
// @ts-nocheck
import 'https://cdn.jsdelivr.net/npm/chart.js';
declare var Chart: any;

export class Yield extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // Create a shadow root
        const shadow = this.attachShadow({mode: 'open'});
        // get data
        this.data = this.getAttribute('data');
        this.data = JSON.parse(this.data);
        this.labels = this.getAttribute('labels');
        this.labels = JSON.parse(this.labels);
        this.name = this.getAttribute('name');

        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'myChart');
        // canvas.setAttribute('style', 'display: block; width: 400px; height: 400px;');
        shadow.appendChild(canvas);

        setupChart(canvas, this.data, this.labels, this.name);

    }
  }
  
function setupChart(canvas, data, labels, name) {
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
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
                    text: '人流量： 人/小时',
                    font: {
                        size: 10,
                        style: 'normal',
                        lineHeight: 1.2
                    },
                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                    }
                }
                }
        },
              
    });
    return chart;
}
