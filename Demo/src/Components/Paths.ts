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
            <button id="pathsCom">btn</button>
        </div>
        `;
        this.source=source
        this.target=target
    }
}