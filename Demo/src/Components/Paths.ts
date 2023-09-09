export class PathsCom extends HTMLElement{
    source : number
    target : number
    constructor(
        source:number,
        target:number
        ){
        super()
        this.innerHTML = `
        <div class="chart-container" style="position: relative; height:400px; width:500px">
            

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
}