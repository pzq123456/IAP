// 禁用 TS2304 检查器，因为我们将使用 require 语句
// @ts-nocheck
import 'https://cdn.jsdelivr.net/npm/chart.js';
declare var Chart: any;

export class Post extends HTMLElement{
  color: string; // 组件的背景色
  distance: number; // 距离
  data: number[] = [1,2,3,4,5,6,5,4,3,2,1] ;// 数据
  labels: string[] = ['1','2','3','4','5','6','7','8','9','10','11']; // 标签
  name: string = 'name'; // 名称
  axisX: string = 'axisX'; // X轴名称
  constructor(
    color: string,
    distance: number,
    data: number[],
    labels: string[],
    name: string,
    axisX: string,
  ){
    super();
    this.color = color;
    this.distance = distance; 
    // 距离只保留两位小数
    this.distance = Math.round(this.distance * 100) / 100;
    this.data = data;
    this.labels = labels;
    this.name = name;
    this.axisX = axisX;

    this.innerHTML = `
    <div class="post">
      <div class="post-content">
        <div class="post-header" style="background-color: ${this.color};">
          <div class="distance">距您 ${this.distance} km </div>
        </div>
        <div class="post-body">
          <div class="post-body-title">${this.name}</div>
          <div class="post-body-content">
            <div class="chart-container" style="position: relative; height:400px; width:500px">
              <canvas id="myChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    let canvas = this.querySelector('#myChart');
    // add style
    let style = document.createElement('style');
    style.textContent = `
    .post { 
      width: 500px;
      height: 400px;
      margin: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      background-color: rgba(255, 255, 255, 0.8);
    }
    .post-content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .post-header {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 30px;
    }

    .post-body {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .post-body-title {
      height: 50px; 
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-weight: bold;
    }

    .post-body-content {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .distance {
      font-size: 30px;
      font-weight: bold;
    }
    `;

    this.appendChild(style);
    setupChart(canvas, this.data, this.labels, this.name, this.axisX);
  }
}


function setupChart(canvas, data, labels, name, axisX) {
  const ctx = canvas.getContext('2d');
  const chart = new Chart(ctx, {
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
              size: 10,
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
              size: 10,
              weight: 'bold',
              lineHeight: 1.2,
            },
          }
        }
      }
    }
  });
}
