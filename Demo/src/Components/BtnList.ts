export class BtnList extends HTMLElement{
    btnObjList: { name: string, action: () => void }[];
    constructor(
        btnObjList: { name: string, action: () => void }[],
    ){
        super();
        this.btnObjList = btnObjList;
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        const style = document.createElement('style');
        style.textContent = `
        .wrapper{
            width: 100%;
            height: 50%;
            border-radius: 10px;
            overflow: auto;
        }
        `;
        shadow.appendChild(style);
        this.btnObjList.forEach((btnObj) => {
            const node = new BtnNode(btnObj.name, btnObj.action);
            wrapper.appendChild(node);
        }
        );
        shadow.appendChild(wrapper);
    }
}

export class BtnNode extends HTMLElement{
    name: string;
    action: () => void;
    constructor(
        name: string,
        action: () => void,
    ){
        super();
        this.name = name;
        this.action = action;
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        const nameDiv = document.createElement('div');
        nameDiv.setAttribute('class', 'name');
        nameDiv.textContent = name;
        const style = document.createElement('style');
        style.textContent = `
        .wrapper{
            width: 99%;
            height: 60px;
            background-color: rgb(255, 255, 255, 0.5);
            border-radius: 10px;
            border: 1px solid black;
            overflow: auto;
        }
        .name{
            width: 100%;
            height: 100%;
            line-height: 60px;
            text-align: center;
            font-size: 20px;
        }
        .wrapper:hover{
            background-color: rgb(255, 255, 255, 0.8);
        }
        `;
        shadow.appendChild(style);
        wrapper.appendChild(nameDiv);
        wrapper.addEventListener('click', () => {
            this.action();
        });
        shadow.appendChild(wrapper);
    }
}

export function createBtnList(
    btnObjList: { name: string, action: () => void }[],
    fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!
){
    // clear
    fatherContainer.innerHTML = '';
    const btnList = new BtnList(btnObjList);
    fatherContainer.appendChild(btnList);
}