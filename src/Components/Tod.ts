// 禁用 TS2304 检查器，因为我们将使用 require 语句
// @ts-nocheck
/**
 * 用于管理显示数据的组件，以树形结构展示，可以交互
 */
// dataList = [
//     ['name1', 'url1', 'backgroundColor1'],
//     ['name2', 'url2', 'backgroundColor2'],
// ]
export class TOD extends HTMLElement{
    dataList : string[][];
    constructor(
        dataList: string[][],
    ){
        super();
        this.dataList = dataList;
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        const style = document.createElement('style');
        style.textContent = `
        .wrapper{
            width: 600px;
            height: 920px;
            background-color: rgb(255, 255, 255, 0.5);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            overflow: auto;
        }
        `;
        shadow.appendChild(style);
        this.dataList.forEach((data) => {
            const node = new TODNode(data[0], data[1], data[2]);
            wrapper.appendChild(node);
        }
        );
        shadow.appendChild(wrapper);
    }
}

export class TODNode extends HTMLElement{
    name: string;
    url: string;
    backgroundColor: string;
    constructor(
        name: string,
        url: string,
        backgroundColor: string = 'white'
    ){
        super();
        this.name = name;
        this.url = url;
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        const nameDiv = document.createElement('div');
        nameDiv.setAttribute('class', 'name');
        nameDiv.textContent = name;
        const urlDiv = document.createElement('div');
        urlDiv.setAttribute('class', 'url');
        urlDiv.textContent = url;
        const style = document.createElement('style');
        style.textContent = `
        .wrapper{
            width: 600px;
            height: 60px;
            background-color: ${backgroundColor};
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            overflow: auto;
        }
        .name{
            font-size: 20px;
            font-weight: bold;
            background-color: white;
        }

        .url{
            font-size: 15px;
            background-color: white;
        }`;
        shadow.appendChild(style);
        wrapper.appendChild(nameDiv);
        wrapper.appendChild(urlDiv);
        shadow.appendChild(wrapper);
    }
}


