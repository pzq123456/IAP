export class PathsCom extends HTMLElement{
    source : number
    target : number
    constructor(
        source:number,
        target:number
        ){
        super()
        this.innerHTML = `
        <div class="chart-container" style="position: relative; height:100px; width:500px">
            

        <select id="paths_selectSource" style="width:100px">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </select>
        <select id="paths_selectTarget" style="width:100px">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </select>
        <button id="paths_button">btn</button>
        </div>
        `;
        this.source=source
        this.target=target
    }

    addDistanceDiV(
        star: number,
        end: number,
        distance: number,
    ){
        const div = document.createElement('div');

        // distance 保留两位小数
        distance = Math.round(distance * 100) / 100;


        div.innerHTML = `
        <div class="distance">
            <div class="distance-star"> 起点： ${star} </div>
            <div class="distance-end"> 终点： ${end} </div>
            <div class="distance-distance">距离： ${distance} km </div>
        </div>
        `;
        // add style
        const style = document.createElement('style');
        style.textContent = `
        .distance{
            width: 100%;
            height: 30px;
            background-color: rgb(255, 255, 255, 0.5);
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        .distance-star{
            width: 100px;
            height: 100%;
            text-align: center;
            border: 1px solid black;
            border-radius: 10px;
        }
        .distance-end{
            width: 100px;
            height: 100%;
            text-align: center;
            border: 1px solid black;
            border-radius: 10px;
        }
        .distance-distance{
            width: 200px;
            height: 100%;
            text-align: center;
            border: 1px solid black;
            border-radius: 10px;
        }
        `;
        this.appendChild(style);
        this.appendChild(div);
    }
}