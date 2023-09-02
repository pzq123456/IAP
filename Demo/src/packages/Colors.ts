/**
 * 用于值-颜色映射的函数
 */
const Colors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#9400D3",
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#9400D3",
    "#FF0000",
    "#FF7F00",
] // 默认颜色


/**
 * 将单个数值映射为颜色（需要传入所有的数值用于归一化）
 * @param value 
 * @param values 
 * @param colors 
 * @returns 
 */
export function N2C(value:number, values:number[], colors:string[] = Color){
    let {max,min} = getMaxMin(values);
    let index = Math.floor(normalize(value,min,max) * (colors.length - 1));
    return colors[index];
}

function normalize(value:number, min:number, max:number) {
    return (value - min) / (max - min);
}

function getMaxMin(arr:number[]){
    let max = arr[0];
    let min = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return {
        max,
        min
    };
}

export function showColorLegend(
    values:number[] = evenValue(),
    colors:string[] = Colors,
    fatherContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#components')!
){
    let {max,min} = getMaxMin(values);
    let unit = (max - min) / colors.length;
    let html = `<div style="display:flex;flex-direction:column">`;
    for(let i = 0 ; i < colors.length ; i++){
        html += `<div style="display:flex;align-items:center">
            <div style="width:20px;height:20px;background-color:${colors[i]}"></div>
            <div>${min + i * unit} ~ ${min + (i + 1) * unit}</div>
        </div>`
    }
    html += `</div>`;
    fatherContainer.innerHTML = html;
}

function evenValue(){
    let res = [];
    for(let i = 0 ; i < 100 ; i++){
        res.push(i);
    }
    return res;
}