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
        // Create a shadow root
        const shadow = this.attachShadow({mode: 'open'});
        // get data
        this.data = data;
        this.labels = labels;
        this.name = name;
        // In my case the canvas needed to be wrapped inside an element with the CSS display: block;

        const wrapper = document.createElement('div');
        wrapper.setAttribute('style', 'display: block; width: 400px; height: 400px;');
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'myChart');
        wrapper.appendChild(canvas);
        shadow.appendChild(wrapper);

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