import 'https://cdn.jsdelivr.net/npm/chart.js';
declare var Chart: any;
export class About extends HTMLElement {
    member: string[][];
    constructor(
        member: string[],
    ) {
        // Always call super first in constructor
        super();
        this.member = member;
        let html = `<div style="display:flex;flex-direction:column"> <h1> 开发人员 </h1>`;
        for(let i = 0 ; i < this.member.length ; i++){
            html += `<div style="display:flex;align-items:center ; justify-content:center ; flex-direction:column">
                <img src="${this.member[i][2]}" style="width:100px;height:100px;border-radius:50%;
                "></img>
                <div style="width:20px ; height:20px"></div>
                    <a href="${this.member[i][1]}"> <h3> ${ this.member[i][0] } </h3> </a>
                </div>
            </div>`
        }
        html += `</div>`;
        // add button 
        html += `<button id="close" style="position:absolute;right:0;top:0;">X</button>`
        this.innerHTML = html;

        // 为按钮添加点击事件
        this.querySelector('#close')!.addEventListener('click', () => {
            document.querySelector('#components')!.style.display = 'none';
            document.querySelector('.DarkLayer')!.style.display = 'none';
            this.remove();
        });
    }
}